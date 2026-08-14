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

function markdownEscape(value) {
  return String(value ?? '').replaceAll('|', '\\|').replaceAll('\n', ' ')
}

const catalog = JSON.parse(await readFile(join(root, 'catalog/plugins.json'), 'utf8'))
const repositories = JSON.parse(await readFile(join(root, 'catalog/repositories.json'), 'utf8'))
const readme = await readFile(join(root, 'README.md'), 'utf8')
const englishReadme = await readFile(join(root, 'README.en.md'), 'utf8')

if (catalog.schemaVersion !== 1) fail('plugins.json 的 schemaVersion 不受支持')
if (repositories.schemaVersion !== 1) fail('repositories.json 的 schemaVersion 不受支持')
if (catalog.count !== catalog.plugins.length) fail('plugins.json 的 count 与实际数量不一致')
if (catalog.generatedAt !== repositories.generatedAt) fail('两个目录的生成时间不一致')

const repositoryNames = new Set()
for (const plugin of catalog.plugins) {
  if (repositoryNames.has(plugin.repository)) fail(`仓库重复：${plugin.repository}`)
  repositoryNames.add(plugin.repository)

  if (plugin.classification !== 'plugin') fail(`插件分类错误：${plugin.repository}`)
  if (!/^[0-9a-f]{40}$/.test(plugin.commit)) fail(`提交哈希无效：${plugin.repository}`)
  if (!plugin.package?.bundlePatch) fail(`缺少 bundle patch：${plugin.repository}`)
  const expectedSpec = `github:${plugin.repository}`
  if (plugin.install?.spec !== expectedSpec) {
    fail(`安装规格未指向上游最新版本：${plugin.repository}`)
  }
  if (plugin.install?.command !== `dsh plugin --profile web add ${expectedSpec}`) {
    fail(`安装命令未指向上游最新版本：${plugin.repository}`)
  }
  if (!readme.includes(`[${plugin.repository}](${plugin.url})`)) {
    fail(`README 缺少插件地址：${plugin.repository}`)
  }
  if (!englishReadme.includes(`[${plugin.repository}](${plugin.url})`)) {
    fail(`README.en.md 缺少插件地址：${plugin.repository}`)
  }
  const description = markdownEscape(plugin.description || '上游仓库暂未提供介绍')
  if (!readme.includes(description)) {
    fail(`README 缺少插件介绍：${plugin.repository}`)
  }
  const englishDescription = markdownEscape(plugin.description || 'No description provided by the upstream repository')
  if (!englishReadme.includes(englishDescription)) {
    fail(`README.en.md 缺少插件介绍：${plugin.repository}`)
  }
}

if (!readme.includes('[English](README.en.md)')) fail('README 缺少英文版入口')
if (!englishReadme.includes('[简体中文](README.md)')) fail('README.en.md 缺少中文版入口')

const result = spawnSync('git', ['ls-files', '--stage', 'plugins'], { cwd: root, encoding: 'utf8' })
if (result.status !== 0) {
  fail('无法检查 Git 文件列表')
} else if (result.stdout.trim() !== '') {
  fail('仓库仍然跟踪 plugins 目录，不是纯导航目录')
}

if (!process.exitCode) {
  console.log(`校验通过：${catalog.plugins.length} 个插件，${repositories.repositories.length} 个主题仓库。`)
}
