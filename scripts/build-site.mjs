#!/usr/bin/env node

import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const sourceDirectory = join(root, 'site')
const outputDirectory = join(root, 'dist')
const catalogSource = join(root, 'catalog/plugins.json')
const catalogOutput = join(outputDirectory, 'catalog/plugins.json')

const catalog = JSON.parse(await readFile(catalogSource, 'utf8'))

if (!Array.isArray(catalog.plugins) || catalog.count !== catalog.plugins.length) {
  throw new Error('插件目录结构无效，无法构建网站。')
}

await rm(outputDirectory, { recursive: true, force: true })
await cp(sourceDirectory, outputDirectory, { recursive: true })
await mkdir(dirname(catalogOutput), { recursive: true })
await writeFile(catalogOutput, `${JSON.stringify(catalog)}\n`)

console.log(`网站构建完成：${catalog.plugins.length} 个插件。`)
