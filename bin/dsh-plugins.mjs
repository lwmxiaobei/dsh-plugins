#!/usr/bin/env node

import { readFile } from 'node:fs/promises'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const catalog = JSON.parse(await readFile(join(root, 'catalog/plugins.json'), 'utf8'))
const plugins = catalog.plugins

function usage() {
  console.log(`用法：
  dsh-plugins list
  dsh-plugins search <关键词>
  dsh-plugins info <仓库名或包名>
  dsh-plugins install <仓库名或包名> [--profile web] [--execute]

install 默认只显示命令。加入 --execute 后才会调用 dsh plugin。`)
}

function pluginText(plugin) {
  return [
    plugin.repository,
    plugin.package.name,
    plugin.description ?? '',
    plugin.language ?? '',
  ].join(' ').toLowerCase()
}

function findPlugin(query) {
  const normalized = query.toLowerCase()
  const exact = plugins.filter((plugin) =>
    plugin.repository.toLowerCase() === normalized
    || plugin.package.name.toLowerCase() === normalized,
  )
  if (exact.length === 1) return exact[0]

  const partial = plugins.filter((plugin) => pluginText(plugin).includes(normalized))
  if (partial.length === 1) return partial[0]
  if (partial.length > 1) {
    console.error(`匹配到 ${partial.length} 个插件，请使用完整仓库名或包名：`)
    for (const plugin of partial.slice(0, 20)) {
      console.error(`  ${plugin.repository}  ${plugin.package.name}`)
    }
  } else {
    console.error(`没有找到插件：${query}`)
  }
  process.exit(2)
}

function printRow(plugin) {
  const license = plugin.license === 'NOASSERTION' ? '许可证未识别' : plugin.license
  console.log(`${plugin.repository}\t${plugin.package.name}\t${license}\t★ ${plugin.stars}`)
}

function printInfo(plugin) {
  console.log(`仓库：${plugin.repository}
包名：${plugin.package.name}
版本：${plugin.package.version ?? '未声明'}
描述：${plugin.description ?? '无'}
许可证：${plugin.license}
语言：${plugin.language ?? '未知'}
固定提交：${plugin.commit}
上游地址：${plugin.url}
安装规格：${plugin.install.spec}`)
}

const [command = 'list', ...args] = process.argv.slice(2)

if (command === 'list') {
  for (const plugin of plugins) printRow(plugin)
  console.log(`\n共 ${plugins.length} 个通过基础清单校验的插件。`)
} else if (command === 'search') {
  const query = args.find((argument) => !argument.startsWith('--'))
  if (!query) {
    usage()
    process.exit(2)
  }
  const matches = plugins.filter((plugin) => pluginText(plugin).includes(query.toLowerCase()))
  for (const plugin of matches) printRow(plugin)
  console.log(`\n找到 ${matches.length} 个插件。`)
} else if (command === 'info') {
  const query = args.find((argument) => !argument.startsWith('--'))
  if (!query) {
    usage()
    process.exit(2)
  }
  printInfo(findPlugin(query))
} else if (command === 'install') {
  const query = args.find((argument) => !argument.startsWith('--'))
  if (!query) {
    usage()
    process.exit(2)
  }
  const profileIndex = args.indexOf('--profile')
  const profile = profileIndex >= 0 ? args[profileIndex + 1] : 'web'
  if (!profile || profile.startsWith('--')) {
    console.error('--profile 后必须提供 profile 名称。')
    process.exit(2)
  }

  const plugin = findPlugin(query)
  const commandArgs = ['plugin', '--profile', profile, 'add', plugin.install.spec]
  console.log(`将安装固定版本：${plugin.repository}@${plugin.commit.slice(0, 12)}`)
  console.log(`命令：dsh ${commandArgs.join(' ')}`)

  if (!args.includes('--execute')) {
    console.log('当前是预览模式。确认上游代码和许可证后，加入 --execute 执行。')
    process.exit(0)
  }

  const result = spawnSync('dsh', commandArgs, { stdio: 'inherit' })
  if (result.error?.code === 'ENOENT') {
    console.error('未找到 dsh 命令，请先安装 DeepSeek Harness。')
    process.exit(127)
  }
  if (result.error) throw result.error
  process.exit(result.status ?? 1)
} else {
  usage()
  process.exit(2)
}
