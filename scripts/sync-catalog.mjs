#!/usr/bin/env node

import { spawnSync } from 'node:child_process'
import { mkdir, writeFile } from 'node:fs/promises'
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

  const response = await fetch(`${apiBase}${path}`, { headers })
  if (optional && response.status === 404) return null
  if (!response.ok) {
    const body = await response.text()
    throw new Error(`GitHub API ${response.status}: ${path}\n${body}`)
  }
  return raw ? response.text() : response.json()
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
    path: `plugins/${repository.full_name}`,
    package: {
      name: packageJson.name ?? repository.name,
      version: packageJson.version ?? null,
      private: packageJson.private === true,
      bundlePatch: patch,
      clientPlatform: packageJson.dsh?.client?.platform ?? null,
    },
    install: {
      spec: `github:${repository.full_name}#${commit}`,
      command: `dsh plugin --profile web add github:${repository.full_name}#${commit}`,
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

function generateCatalog(snapshot, plugins) {
  const lines = [
    '# DSH 插件目录',
    '',
    `同步时间：${snapshot}`,
    '',
    `共收录 ${plugins.length} 个通过基础 bundle 清单校验的插件。星标数和许可证来自同步时的 GitHub API 快照。`,
    '',
    '| 插件仓库 | 包名 | 描述 | 许可证 | 星标 | 固定提交 |',
    '| --- | --- | --- | --- | ---: | --- |',
  ]
  for (const plugin of plugins) {
    lines.push(`| [${markdownEscape(plugin.repository)}](${plugin.url}) | \`${markdownEscape(plugin.package.name)}\` | ${markdownEscape(plugin.description)} | ${markdownEscape(plugin.license)} | ${plugin.stars} | \`${plugin.commit.slice(0, 12)}\` |`)
  }
  return `${lines.join('\n')}\n`
}

function generateGitmodules(plugins) {
  const lines = []
  for (const plugin of [...plugins].sort((a, b) => a.path.localeCompare(b.path))) {
    lines.push(
      `[submodule "${plugin.path}"]`,
      `\tpath = ${plugin.path}`,
      `\turl = ${plugin.url}.git`,
      `\tbranch = ${plugin.defaultBranch}`,
    )
  }
  return `${lines.join('\n')}\n`
}

function runGit(args, { allowFailure = false } = {}) {
  const result = spawnSync('git', args, { cwd: root, encoding: 'utf8' })
  if (!allowFailure && result.status !== 0) {
    throw new Error(`git ${args.join(' ')} 执行失败：\n${result.stderr}`)
  }
  return result
}

async function updateGitlinks(plugins) {
  if (process.argv.includes('--no-gitlinks')) return
  const inside = runGit(['rev-parse', '--is-inside-work-tree'], { allowFailure: true })
  if (inside.status !== 0) return

  const desired = new Map(plugins.map((plugin) => [plugin.path, plugin.commit]))
  const current = runGit(['ls-files', '--stage', 'plugins'], { allowFailure: true })
  const currentPaths = current.stdout
    .split('\n')
    .filter(Boolean)
    .map((line) => line.split('\t')[1])

  for (const path of currentPaths) {
    if (!desired.has(path)) runGit(['update-index', '--force-remove', '--', path])
  }
  for (const plugin of plugins) {
    runGit(['update-index', '--add', '--cacheinfo', `160000,${plugin.commit},${plugin.path}`])
  }
}

const repositories = await searchRepositories()
console.log(`发现 ${repositories.length} 个带有 ${topic} 主题的仓库，开始校验清单。`)

const inspected = await mapConcurrent(repositories, concurrency, inspectRepository)
inspected.sort(compareEntries)
const plugins = inspected.filter((entry) => entry.classification === 'plugin').sort(compareEntries)
const snapshot = new Date().toISOString()

await mkdir(join(root, 'catalog'), { recursive: true })
await mkdir(join(root, 'plugins'), { recursive: true })
await writeFile(join(root, 'catalog', 'repositories.json'), `${JSON.stringify({
  schemaVersion: 1,
  topic,
  generatedAt: snapshot,
  reportedCount: repositories.length,
  repositories: inspected,
}, null, 2)}\n`)
await writeFile(join(root, 'catalog', 'plugins.json'), `${JSON.stringify({
  schemaVersion: 1,
  topic,
  generatedAt: snapshot,
  count: plugins.length,
  plugins,
}, null, 2)}\n`)
await writeFile(join(root, 'CATALOG.md'), generateCatalog(snapshot, plugins))
await writeFile(join(root, '.gitmodules'), generateGitmodules(plugins))
for (const plugin of plugins) {
  await mkdir(join(root, plugin.path), { recursive: true })
}
await updateGitlinks(plugins)

const counts = Object.groupBy(inspected, (entry) => entry.classification)
console.log(`同步完成：${plugins.length} 个插件，${counts.related?.length ?? 0} 个相关项目，${counts['invalid-plugin']?.length ?? 0} 个清单无效项目，${counts['excluded-plugin']?.length ?? 0} 个排除项目。`)
