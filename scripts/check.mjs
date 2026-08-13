#!/usr/bin/env node

import { spawnSync } from 'node:child_process'
import { readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))

function fail(message) {
  console.error(`校验失败：${message}`)
  process.exitCode = 1
}

const catalog = JSON.parse(await readFile(join(root, 'catalog/plugins.json'), 'utf8'))
const repositories = JSON.parse(await readFile(join(root, 'catalog/repositories.json'), 'utf8'))
const gitmodules = await readFile(join(root, '.gitmodules'), 'utf8')

if (catalog.schemaVersion !== 1) fail('plugins.json 的 schemaVersion 不受支持')
if (repositories.schemaVersion !== 1) fail('repositories.json 的 schemaVersion 不受支持')
if (catalog.count !== catalog.plugins.length) fail('plugins.json 的 count 与实际数量不一致')

const repositoryNames = new Set()
const paths = new Set()
for (const plugin of catalog.plugins) {
  if (repositoryNames.has(plugin.repository)) fail(`仓库重复：${plugin.repository}`)
  if (paths.has(plugin.path)) fail(`子模块路径重复：${plugin.path}`)
  repositoryNames.add(plugin.repository)
  paths.add(plugin.path)

  if (plugin.classification !== 'plugin') fail(`插件分类错误：${plugin.repository}`)
  if (!/^[0-9a-f]{40}$/.test(plugin.commit)) fail(`提交哈希无效：${plugin.repository}`)
  if (!plugin.package?.bundlePatch) fail(`缺少 bundle patch：${plugin.repository}`)
  if (plugin.install?.spec !== `github:${plugin.repository}#${plugin.commit}`) {
    fail(`安装规格与固定提交不一致：${plugin.repository}`)
  }
  if (!gitmodules.includes(`[submodule "${plugin.path}"]`)) {
    fail(`.gitmodules 缺少：${plugin.path}`)
  }
}

const sections = gitmodules.match(/^\[submodule /gm) ?? []
if (sections.length !== catalog.plugins.length) {
  fail(`.gitmodules 有 ${sections.length} 个子模块，目录有 ${catalog.plugins.length} 个插件`)
}

const result = spawnSync('git', ['ls-files', '--stage', 'plugins'], { cwd: root, encoding: 'utf8' })
if (result.status !== 0) {
  fail('无法读取 Git 插件链接')
} else {
  const gitlinks = new Map(result.stdout.split('\n').filter(Boolean).map((line) => {
    const [metadata, path] = line.split('\t')
    const [mode, commit] = metadata.split(' ')
    if (mode !== '160000') fail(`插件路径不是 Git 子模块：${path}`)
    return [path, commit]
  }))
  if (gitlinks.size !== catalog.plugins.length) {
    fail(`Git 索引有 ${gitlinks.size} 个插件链接，目录有 ${catalog.plugins.length} 个插件`)
  }
  for (const plugin of catalog.plugins) {
    if (gitlinks.get(plugin.path) !== plugin.commit) {
      fail(`Git 链接没有固定到目录提交：${plugin.repository}`)
    }
  }
}

if (!process.exitCode) {
  console.log(`校验通过：${catalog.plugins.length} 个插件，${repositories.repositories.length} 个主题仓库。`)
}
