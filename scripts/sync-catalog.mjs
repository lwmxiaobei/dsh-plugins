#!/usr/bin/env node

import { spawnSync } from 'node:child_process'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join, posix } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const apiBase = 'https://api.github.com'
const topic = 'dsh-plugin'
const concurrency = 12

function resolveToken() {
  if (process.env.GITHUB_TOKEN) return process.env.GITHUB_TOKEN
  if (process.env.GH_TOKEN) return process.env.GH_TOKEN
  const result = spawnSync('gh', ['auth', 'token'], { encoding: 'utf8' })
  if (result.status === 0) return result.stdout.trim()
  return ''
}

const token = resolveToken()

async function githubFetch(path, { optional = false, raw = false } = {}) {
  const headers = {
    Accept: raw ? 'application/vnd.github.raw+json' : 'application/vnd.github+json',
    'User-Agent': 'lwmxiaobei-dsh-plugins',
    'X-GitHub-Api-Version': '2022-11-28',
  }
  if (token) headers.Authorization = `Bearer ${token}`

  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      const response = await fetch(`${apiBase}${path}`, { headers })
      if (optional && response.status === 404) return null
      if (!response.ok) {
        const body = await response.text()
        throw new Error(`GitHub API ${response.status}: ${path}\n${body}`)
      }
      return raw ? response.text() : response.json()
    } catch (error) {
      if (attempt === 4) throw error
      await new Promise((resolve) => setTimeout(resolve, attempt * 500))
    }
  }
}

async function searchRepositories() {
  const collected = new Map()
  let reportedTotal = 0

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const first = await githubFetch(`/search/repositories?q=topic%3A${topic}&sort=updated&order=desc&per_page=100&page=1`)
    reportedTotal = first.total_count
    for (const item of first.items) collected.set(item.full_name, item)

    const pageCount = Math.ceil(Math.min(first.total_count, 1000) / 100)
    for (let page = 2; page <= pageCount; page += 1) {
      const result = await githubFetch(`/search/repositories?q=topic%3A${topic}&sort=updated&order=desc&per_page=100&page=${page}`)
      for (const item of result.items) collected.set(item.full_name, item)
    }
    if (collected.size >= Math.min(reportedTotal, 1000)) break
  }

  if (reportedTotal > 1000) {
    console.warn('GitHub Search API 最多返回 1000 条结果，当前目录不是完整快照。')
  } else if (collected.size < reportedTotal) {
    console.warn(`GitHub 搜索结果在分页期间发生变化，报告 ${reportedTotal} 条，实际获取 ${collected.size} 条。`)
  }
  return [...collected.values()]
}

async function readRepositoryFile(repository, branch, path) {
  const encodedPath = path.split('/').map(encodeURIComponent).join('/')
  const ref = encodeURIComponent(branch)
  return githubFetch(`/repos/${repository}/contents/${encodedPath}?ref=${ref}`, { optional: true, raw: true })
}

function normalizePatchPath(value) {
  if (typeof value !== 'string' || value.length === 0) return null
  const normalized = posix.normalize(value.replace(/^\.\//, ''))
  if (normalized === '..' || normalized.startsWith('../') || normalized.startsWith('/')) return null
  return normalized
}

async function inspectRepository(repository) {
  const base = {
    repository: repository.full_name,
    url: repository.html_url,
    description: repository.description,
    defaultBranch: repository.default_branch,
    language: repository.language,
    license: repository.license?.spdx_id ?? 'NOASSERTION',
    stars: repository.stargazers_count,
    forks: repository.forks_count,
    archived: repository.archived,
    disabled: repository.disabled,
    fork: repository.fork,
    template: repository.is_template,
    updatedAt: repository.updated_at,
    pushedAt: repository.pushed_at,
  }

  const packageText = await readRepositoryFile(repository.full_name, repository.default_branch, 'package.json')
  if (packageText === null) return { ...base, classification: 'related', reason: 'missing-package-json' }

  let packageJson
  try {
    packageJson = JSON.parse(packageText)
  } catch {
    return { ...base, classification: 'related', reason: 'invalid-package-json' }
  }

  const patch = normalizePatchPath(packageJson.dsh?.bundle?.patch)
  if (patch === null) {
    return {
      ...base,
      classification: 'related',
      reason: 'missing-dsh-bundle',
      packageName: packageJson.name ?? null,
    }
  }

  const patchText = await readRepositoryFile(repository.full_name, repository.default_branch, patch)
  if (patchText === null) {
    return {
      ...base,
      classification: 'invalid-plugin',
      reason: 'missing-bundle-patch',
      packageName: packageJson.name ?? null,
      bundlePatch: patch,
    }
  }

  const placeholder = typeof packageJson.name === 'string' && /your-scope|plugin-template/i.test(packageJson.name)
  if (repository.archived || repository.disabled || repository.is_template || placeholder) {
    return {
      ...base,
      classification: 'excluded-plugin',
      reason: repository.archived ? 'archived' : repository.disabled ? 'disabled' : 'template',
      packageName: packageJson.name ?? null,
      bundlePatch: patch,
    }
  }

  const branch = encodeURIComponent(repository.default_branch)
  const branchData = await githubFetch(`/repos/${repository.full_name}/branches/${branch}`)
  const commit = branchData.commit.sha

  return {
    ...base,
    classification: 'plugin',
    reason: null,
    commit,
    package: {
      name: packageJson.name ?? repository.name,
      version: packageJson.version ?? null,
      private: packageJson.private === true,
      bundlePatch: patch,
      clientPlatform: packageJson.dsh?.client?.platform ?? null,
    },
    install: {
      spec: `github:${repository.full_name}`,
      command: `dsh plugin --profile web add github:${repository.full_name}`,
    },
  }
}

async function mapConcurrent(items, workerCount, operation) {
  const queue = [...items]
  const output = []
  async function worker() {
    while (queue.length > 0) {
      const item = queue.shift()
      output.push(await operation(item))
    }
  }
  await Promise.all(Array.from({ length: workerCount }, () => worker()))
  return output
}

function compareEntries(left, right) {
  return right.stars - left.stars || left.repository.localeCompare(right.repository)
}

function markdownEscape(value) {
  return String(value ?? '').replaceAll('|', '\\|').replaceAll('\n', ' ')
}

async function readExistingCatalog(path) {
  try {
    return JSON.parse(await readFile(path, 'utf8'))
  } catch (error) {
    if (error?.code === 'ENOENT' || error instanceof SyntaxError) return null
    throw error
  }
}

function sameData(left, right) {
  return JSON.stringify(left) === JSON.stringify(right)
}

function appendPluginTable(lines, plugins, missingDescription) {
  for (const plugin of plugins) {
    const description = plugin.description || missingDescription
    lines.push(`| [${markdownEscape(plugin.repository)}](${plugin.url}) | ${markdownEscape(description)} | \`${markdownEscape(plugin.package.name)}\` | ${markdownEscape(plugin.license)} | ${plugin.stars} |`)
  }
}

function generateChineseReadme(snapshot, plugins) {
  const lines = [
    '# Awesome DSH Plugins',
    '',
    '[English](README.en.md) | 简体中文',
    '',
    '社区维护的 DeepSeek Harness 插件导航与介绍目录。',
    '',
    '> [!IMPORTANT]',
    '> 收录不代表官方背书、安全审计或运行兼容。安装第三方插件前，请检查上游源码、权限、依赖和许可证。',
    '',
    '## 插件网站',
    '',
    '访问地址：[dsh-plugins.org](https://dsh-plugins.org)',
    '',
    '仓库同时提供部署在 Cloudflare Worker 上的双语插件集合网站，支持搜索、筛选、排序、最新版本安装命令复制，以及每个插件的中文与英文静态详情页。网站包含规范链接、语言替代链接、Open Graph、Twitter Card、JSON-LD、XML Sitemap、robots.txt、RSS、Web App Manifest 与 llms.txt。',
    '',
    '本地运行：',
    '',
    '```bash',
    'npm install',
    'npm run dev',
    '```',
    '',
    '质量检查与构建：',
    '',
    '```bash',
    'npm run check',
    'npm test',
    'npm run build',
    'npx wrangler deploy --dry-run',
    'npm run deploy',
    '```',
    '',
    'SEO 入口：[中文目录](https://dsh-plugins.org/) · [英文目录](https://dsh-plugins.org/en) · [站点地图](https://dsh-plugins.org/sitemap.xml) · [RSS](https://dsh-plugins.org/feed.xml) · [AI 发现说明](https://dsh-plugins.org/llms.txt)',
    '',
    '## 插件目录',
    '',
    `更新时间：${snapshot}`,
    '',
    `当前收录 ${plugins.length} 个通过基础 bundle 清单校验的插件。插件地址和介绍均来自对应的上游仓库。`,
    '',
    '| 插件 | 介绍 | 包名 | 许可证 | 星标 |',
    '| :--- | :--- | :--- | :---: | ---: |',
  ]
  appendPluginTable(lines, plugins, '上游仓库暂未提供介绍')
  lines.push(
    '',
    '## 查找插件',
    '',
    '```bash',
    'npm run list',
    'node bin/dsh-plugins.mjs search vision',
    'node bin/dsh-plugins.mjs info Anionex/dsh-vision-toolkit',
    '```',
    '',
    '## 安装插件',
    '',
    '安装命令默认只预览，不执行上游代码：',
    '',
    '```bash',
    'node bin/dsh-plugins.mjs install Anionex/dsh-vision-toolkit --profile web',
    '```',
    '',
    '确认上游代码和许可证后，加入 `--execute` 执行安装。',
    '',
    '## 收录规则',
    '',
    '同步程序从 GitHub 的 `dsh-plugin` 主题发现候选仓库。只有根目录 `package.json` 声明 `dsh.bundle.patch`，对应 patch 文件真实存在，且仓库未归档、未禁用、不是模板的项目，才进入上面的目录。',
    '',
    '机器可读目录见 [catalog/plugins.json](catalog/plugins.json)。全部候选及未收录原因见 [catalog/repositories.json](catalog/repositories.json)。',
    '',
    '## 自动更新',
    '',
    'GitHub Actions 每天北京时间 09:17 自动发现和校验插件。目录内容发生变化时，工作流会自动提交到 `main`。也可以在 Actions 页面手动运行 `sync plugins`。',
    '',
    '## 更新目录',
    '',
    '```bash',
    'npm run sync',
    'npm run check',
    '```',
    '',
    '本仓库只保存导航数据、文档和维护脚本，不复制或嵌入任何第三方插件源码。插件版权与许可证归各上游项目所有。`NOASSERTION` 表示 GitHub API 未识别到明确许可证。',
  )
  return `${lines.join('\n')}\n`
}

function generateEnglishReadme(snapshot, plugins) {
  const lines = [
    '# Awesome DSH Plugins',
    '',
    'English | [简体中文](README.md)',
    '',
    'A community maintained directory of DeepSeek Harness plugins, with links and descriptions.',
    '',
    '> [!IMPORTANT]',
    '> Inclusion does not imply official endorsement, a security audit, or runtime compatibility. Review the upstream source code, permissions, dependencies, and license before installing a third party plugin.',
    '',
    '## Plugin website',
    '',
    'Visit [dsh-plugins.org](https://dsh-plugins.org).',
    '',
    'This repository also provides a bilingual plugin directory website deployed on Cloudflare Workers. It supports search, filters, sorting, install commands that follow the latest upstream default branch, and a static Chinese and English detail page for every plugin. The website includes canonical and alternate language links, Open Graph, Twitter Card, JSON-LD, an XML sitemap, robots.txt, RSS, a Web App Manifest, and llms.txt.',
    '',
    'Run locally:',
    '',
    '```bash',
    'npm install',
    'npm run dev',
    '```',
    '',
    'Check, build, and deploy:',
    '',
    '```bash',
    'npm run check',
    'npm test',
    'npm run build',
    'npx wrangler deploy --dry-run',
    'npm run deploy',
    '```',
    '',
    'SEO entry points: [Chinese directory](https://dsh-plugins.org/) · [English directory](https://dsh-plugins.org/en) · [Sitemap](https://dsh-plugins.org/sitemap.xml) · [RSS](https://dsh-plugins.org/feed.xml) · [AI discovery guide](https://dsh-plugins.org/llms.txt)',
    '',
    '## Plugin directory',
    '',
    `Last updated: ${snapshot}`,
    '',
    `The directory currently contains ${plugins.length} plugins that passed the basic bundle manifest checks. Links and descriptions come from their upstream repositories, so descriptions may remain in the language used by each author.`,
    '',
    '| Plugin | Description | Package | License | Stars |',
    '| :--- | :--- | :--- | :---: | ---: |',
  ]
  appendPluginTable(lines, plugins, 'No description provided by the upstream repository')
  lines.push(
    '',
    '## Find plugins',
    '',
    '```bash',
    'npm run list',
    'node bin/dsh-plugins.mjs search vision',
    'node bin/dsh-plugins.mjs info Anionex/dsh-vision-toolkit',
    '```',
    '',
    '## Install a plugin',
    '',
    'The install command only prints a preview by default and does not execute upstream code:',
    '',
    '```bash',
    'node bin/dsh-plugins.mjs install Anionex/dsh-vision-toolkit --profile web',
    '```',
    '',
    'After reviewing the upstream code and license, add `--execute` to run the installation.',
    '',
    '## Inclusion rules',
    '',
    'The sync script discovers candidate repositories from the GitHub `dsh-plugin` topic. A project is listed only when its root `package.json` declares `dsh.bundle.patch`, the referenced patch file exists, and the repository is active, enabled, and not a template.',
    '',
    'See [catalog/plugins.json](catalog/plugins.json) for the machine readable plugin directory. See [catalog/repositories.json](catalog/repositories.json) for all candidates and exclusion reasons.',
    '',
    '## Automatic updates',
    '',
    'GitHub Actions discovers and validates plugins every day at 09:17 China Standard Time. When directory content changes, the workflow commits both README files and the catalog data to `main`. You can also run `sync plugins` manually from the Actions page.',
    '',
    '## Update locally',
    '',
    '```bash',
    'npm run sync',
    'npm run check',
    '```',
    '',
    'This repository stores only navigation data, documentation, and maintenance scripts. It does not copy or embed third party plugin source code. Copyright and licensing remain with each upstream project. `NOASSERTION` means the GitHub API did not identify an explicit license.',
  )
  return `${lines.join('\n')}\n`
}

if (process.argv.includes('--readme-only')) {
  const catalog = JSON.parse(await readFile(join(root, 'catalog', 'plugins.json'), 'utf8'))
  await writeFile(join(root, 'README.md'), generateChineseReadme(catalog.generatedAt, catalog.plugins))
  await writeFile(join(root, 'README.en.md'), generateEnglishReadme(catalog.generatedAt, catalog.plugins))
  console.log(`README 生成完成：${catalog.plugins.length} 个插件。`)
  process.exit(0)
}

const repositories = await searchRepositories()
console.log(`发现 ${repositories.length} 个带有 ${topic} 主题的仓库，开始校验清单。`)

const inspected = await mapConcurrent(repositories, concurrency, inspectRepository)
inspected.sort(compareEntries)
const plugins = inspected.filter((entry) => entry.classification === 'plugin').sort(compareEntries)

await mkdir(join(root, 'catalog'), { recursive: true })
const pluginsPath = join(root, 'catalog', 'plugins.json')
const repositoriesPath = join(root, 'catalog', 'repositories.json')
const previousPlugins = await readExistingCatalog(pluginsPath)
const previousRepositories = await readExistingCatalog(repositoriesPath)
const unchanged = previousPlugins?.topic === topic
  && previousPlugins?.count === plugins.length
  && sameData(previousPlugins?.plugins, plugins)
  && previousRepositories?.topic === topic
  && previousRepositories?.reportedCount === repositories.length
  && sameData(previousRepositories?.repositories, inspected)
const snapshot = unchanged && previousPlugins?.generatedAt === previousRepositories?.generatedAt
  ? previousPlugins.generatedAt
  : new Date().toISOString()

await writeFile(repositoriesPath, `${JSON.stringify({
  schemaVersion: 1,
  topic,
  generatedAt: snapshot,
  reportedCount: repositories.length,
  repositories: inspected,
}, null, 2)}\n`)
await writeFile(pluginsPath, `${JSON.stringify({
  schemaVersion: 1,
  topic,
  generatedAt: snapshot,
  count: plugins.length,
  plugins,
}, null, 2)}\n`)
await writeFile(join(root, 'README.md'), generateChineseReadme(snapshot, plugins))
await writeFile(join(root, 'README.en.md'), generateEnglishReadme(snapshot, plugins))

const counts = Object.groupBy(inspected, (entry) => entry.classification)
console.log(`同步完成：${plugins.length} 个插件，${counts.related?.length ?? 0} 个相关项目，${counts['invalid-plugin']?.length ?? 0} 个清单无效项目，${counts['excluded-plugin']?.length ?? 0} 个排除项目。`)
