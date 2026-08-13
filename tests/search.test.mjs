import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import { createSearchIndex, normalizeSearchText, searchPlugins, uniqueFacetValues } from '../site/search.js'

const catalog = JSON.parse(await readFile(new URL('../catalog/plugins.json', import.meta.url), 'utf8'))
const index = createSearchIndex(catalog.plugins)

test('规范化大小写、重音和空白', () => {
  assert.equal(normalizeSearchText('  Café   TOOL  '), 'cafe tool')
})

test('空搜索默认按星标降序返回全部插件', () => {
  const results = searchPlugins(index, '')
  assert.equal(results.length, catalog.count)
  assert.ok(results[0].stars >= results[1].stars)
})

test('支持按仓库名和包名搜索', () => {
  const repositoryResults = searchPlugins(index, 'liustack/modlens')
  const packageResults = searchPlugins(index, '@liustack/modlens')

  assert.equal(repositoryResults[0].repository, 'liustack/modlens')
  assert.equal(packageResults[0].repository, 'liustack/modlens')
})

test('支持中文描述搜索和多关键词交集', () => {
  const chineseResults = searchPlugins(index, '视觉')
  const multiTermResults = searchPlugins(index, 'vision toolkit')

  assert.ok(chineseResults.length > 0)
  assert.ok(multiTermResults.length > 0)
  assert.ok(multiTermResults.every((plugin) => {
    const text = `${plugin.repository} ${plugin.package.name} ${plugin.description}`.toLowerCase()
    return text.includes('vision') && text.includes('toolkit')
  }))
})

test('支持语言、许可证筛选与名称排序', () => {
  const results = searchPlugins(index, '', {
    language: 'TypeScript',
    license: 'MIT',
    sort: 'name',
  })

  assert.ok(results.length > 0)
  assert.ok(results.every((plugin) => plugin.language === 'TypeScript' && plugin.license === 'MIT'))
  assert.ok(results[0].repository.localeCompare(results[1].repository, 'zh-CN', { sensitivity: 'base' }) <= 0)
})

test('从目录生成不重复的筛选项', () => {
  const languages = uniqueFacetValues(catalog.plugins, 'language')

  assert.ok(languages.includes('TypeScript'))
  assert.equal(languages.length, new Set(languages).size)
})
