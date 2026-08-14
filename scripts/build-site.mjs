#!/usr/bin/env node

import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const sourceDirectory = join(root, 'site')
const outputDirectory = join(root, 'dist')
const catalogSource = join(root, 'catalog/plugins.json')
const catalogOutput = join(outputDirectory, 'catalog/plugins.json')
const siteUrl = 'https://dsh-plugins.org'
const pageSize = 24

const catalog = JSON.parse(await readFile(catalogSource, 'utf8'))

if (!Array.isArray(catalog.plugins) || catalog.count !== catalog.plugins.length) {
  throw new Error('插件目录结构无效，无法构建网站。')
}

const locales = {
  zh: {
    htmlLang: 'zh-CN',
    ogLocale: 'zh_CN',
    prefix: '',
    home: '/',
    about: '/about',
    privacy: '/privacy',
    label: '中文',
    alternateLabel: 'English',
    alternateLocale: 'en',
    alternatePath: '/en',
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    prefix: '/en',
    home: '/en',
    about: '/en/about',
    privacy: '/en/privacy',
    label: 'English',
    alternateLabel: '中文',
    alternateLocale: 'zh-CN',
    alternatePath: '/',
  },
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function cleanText(value = '') {
  return String(value).replace(/\s+/g, ' ').trim()
}

function truncate(value, maxLength) {
  const text = cleanText(value)
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength - 1).trim()}…`
}

function jsonScript(value) {
  return `<script type="application/ld+json">${JSON.stringify(value).replaceAll('<', '\\u003c')}</script>`
}

function absolute(pathname) {
  return `${siteUrl}${pathname === '/' ? '/' : pathname}`
}

function repositoryParts(plugin) {
  return plugin.repository.split('/')
}

function pluginPath(plugin, locale = 'zh') {
  const [owner, repository] = repositoryParts(plugin)
  return `${locales[locale].prefix}/plugins/${encodeURIComponent(owner.toLowerCase())}/${encodeURIComponent(repository.toLowerCase())}`
}

function formatDate(value, locale) {
  return new Intl.DateTimeFormat(locale === 'zh' ? 'zh-CN' : 'en-US', {
    day: 'numeric',
    month: 'long',
    timeZone: 'UTC',
    year: 'numeric',
  }).format(new Date(value))
}

function metaHead({ locale, path, alternatePath, title, description, type = 'website', schema }) {
  const current = locales[locale]
  const imageAlt = locale === 'zh'
    ? 'DSH Plugins，DeepSeek Harness 社区插件目录'
    : 'DSH Plugins, a community directory for DeepSeek Harness plugins'

  return `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <meta name="description" content="${escapeHtml(description)}">
    <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
    <meta name="theme-color" content="#173c58">
    <meta name="color-scheme" content="light dark">
    <meta name="author" content="${locale === 'zh' ? 'DSH Plugins 社区' : 'DSH Plugins community'}">
    <link rel="canonical" href="${absolute(path)}">
    <link rel="alternate" hreflang="zh-CN" href="${absolute(locale === 'zh' ? path : alternatePath)}">
    <link rel="alternate" hreflang="en" href="${absolute(locale === 'en' ? path : alternatePath)}">
    <link rel="alternate" hreflang="x-default" href="${absolute(locale === 'zh' ? path : alternatePath)}">
    <link rel="sitemap" type="application/xml" href="${siteUrl}/sitemap.xml">
    <link rel="manifest" href="/manifest.webmanifest">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="stylesheet" href="/styles.css">
    <meta property="og:type" content="${type}">
    <meta property="og:site_name" content="DSH Plugins">
    <meta property="og:locale" content="${current.ogLocale}">
    <meta property="og:url" content="${absolute(path)}">
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:image" content="${siteUrl}/og-image.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="${imageAlt}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(title)}">
    <meta name="twitter:description" content="${escapeHtml(description)}">
    <meta name="twitter:image" content="${siteUrl}/og-image.png">
    <title>${escapeHtml(title)}</title>
    ${schema.map(jsonScript).join('\n    ')}`
}

function siteHeader(locale, alternatePath = locales[locale].alternatePath) {
  const current = locales[locale]
  const labels = locale === 'zh'
    ? { home: '首页', directory: '插件目录', about: '关于', nav: '主导航' }
    : { home: 'Home', directory: 'Plugin directory', about: 'About', nav: 'Main navigation' }

  return `<header class="subpage-header"><nav class="nav shell" aria-label="${labels.nav}"><a class="brand" href="${current.home}" aria-label="DSH Plugins ${labels.home}"><svg class="brand-mark" viewBox="0 0 48 48" aria-hidden="true"><path d="M7 27c4 0 6-2 7-6 3 7 9 11 18 11 4 0 7-2 9-4-2 8-9 13-18 13C13 41 7 35 7 27Z"/><path d="M35 18c4 0 7-3 7-7 3 5 2 10-2 13M17 27c3 2 7 3 11 3"/></svg><span>DSH Plugins</span></a><div class="nav-actions"><a class="nav-link" href="${current.home}">${labels.directory}</a><a class="nav-link" href="${current.about}">${labels.about}</a><a class="nav-link language-link" href="${alternatePath}" lang="${current.alternateLocale}" hreflang="${current.alternateLocale}">${current.alternateLabel}</a></div></nav></header>`
}

function siteFooter(locale, alternatePath = locales[locale].alternatePath) {
  const current = locales[locale]
  const labels = locale === 'zh'
    ? { note: '社区维护，不代表官方背书或安全审计。', about: '关于目录', privacy: '隐私说明', source: '目录源码', nav: '页脚导航' }
    : { note: 'Community maintained. No official endorsement or security audit.', about: 'About', privacy: 'Privacy', source: 'Source', nav: 'Footer navigation' }

  return `<footer class="footer"><div class="shell footer-inner"><p>${labels.note}</p><nav class="footer-links" aria-label="${labels.nav}"><a href="${current.about}">${labels.about}</a><a href="${current.privacy}">${labels.privacy}</a><a href="${alternatePath}" lang="${current.alternateLocale}" hreflang="${current.alternateLocale}">${current.alternateLabel}</a><a href="https://github.com/lwmxiaobei/dsh-plugins" target="_blank" rel="noopener noreferrer">${labels.source} <span aria-hidden="true">↗</span></a></nav></div></footer>`
}

function renderPluginCard(plugin, locale, index) {
  const [owner, repository] = repositoryParts(plugin)
  const description = plugin.description || (locale === 'zh' ? '上游仓库暂未提供介绍' : 'The upstream repository has not provided a description yet.')
  const license = plugin.license === 'NOASSERTION'
    ? (locale === 'zh' ? '许可证未识别' : 'License unknown')
    : plugin.license
  const version = plugin.package?.version ? `<li>v${escapeHtml(plugin.package.version)}</li>` : ''
  const language = plugin.language ? `<li>${escapeHtml(plugin.language)}</li>` : ''
  const copyLabel = locale === 'zh' ? '复制命令' : 'Copy command'
  const aria = locale === 'zh' ? `复制命令：${plugin.repository}` : `Copy command for ${plugin.repository}`

  return `<li data-prerendered="${index + 1}"><article class="plugin-card"><header class="plugin-header"><div class="plugin-title"><p class="plugin-owner">${escapeHtml(owner)}</p><h3><a href="${pluginPath(plugin, locale)}">${escapeHtml(repository)}</a></h3></div><p class="plugin-stars"><span aria-hidden="true">★</span> <span>${plugin.stars.toLocaleString(locale === 'zh' ? 'zh-CN' : 'en-US')}</span></p></header><p class="plugin-description">${escapeHtml(description)}</p><ul class="plugin-meta">${language}<li>${escapeHtml(license)}</li>${version}</ul><div class="install-command"><code>${escapeHtml(plugin.install.command)}</code><button class="copy-button" type="button" data-copy data-command="${escapeHtml(plugin.install.command)}" data-repository="${escapeHtml(plugin.repository)}" aria-label="${escapeHtml(aria)}"><svg viewBox="0 0 20 20" aria-hidden="true"><rect x="6" y="6" width="10" height="10" rx="1"/><path d="M4 13H3V3h10v1"/></svg><span>${copyLabel}</span></button></div></article></li>`
}

function homeSchema(locale) {
  const isZh = locale === 'zh'
  const path = locales[locale].home
  const questions = isZh
    ? [
        ['DeepSeek Harness 插件是什么？', '它是安装到 DeepSeek Harness 的扩展包，可以增加工具、界面、模型接入、记忆、浏览器自动化等能力。'],
        ['为什么安装命令包含提交哈希？', '固定提交哈希可以避免上游分支变化导致同一命令得到不同代码，使安装结果更容易核验和复现。'],
        ['目录中的插件都经过安全审计吗？', '没有。目录校验公开元数据与基本插件结构，安装前仍需自行查看源码、权限和许可证。'],
        ['如何提交或更新插件？', '为公开 GitHub 仓库添加 dsh-plugin 主题并确保插件清单完整，目录同步时会重新发现和校验。'],
      ]
    : [
        ['What is a DeepSeek Harness plugin?', 'It is an extension installed into DeepSeek Harness to add tools, interfaces, model integrations, memory, browser automation, or other capabilities.'],
        ['Why does the install command include a commit hash?', 'A pinned commit prevents a moving branch from returning different code for the same command and makes installs easier to verify and reproduce.'],
        ['Are listed plugins security audited?', 'No. The directory checks public metadata and basic plugin structure. Review source, permissions, and license before installing.'],
        ['How do I submit or update a plugin?', 'Add the dsh-plugin topic to a public GitHub repository and keep its plugin manifest complete so the directory can discover and validate it.'],
      ]

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${absolute(path)}#website`,
      url: absolute(path),
      name: 'DSH Plugins',
      inLanguage: locales[locale].htmlLang,
      description: isZh ? 'DeepSeek Harness 社区插件目录与安装指南' : 'Community plugin directory and install guide for DeepSeek Harness',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${absolute(path)}?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${absolute(path)}#directory`,
      url: absolute(path),
      name: isZh ? 'DeepSeek Harness 插件目录' : 'DeepSeek Harness plugin directory',
      isPartOf: { '@id': `${absolute(path)}#website` },
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: catalog.count,
        itemListElement: catalog.plugins.slice(0, 24).map((plugin, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: absolute(pluginPath(plugin, locale)),
          name: plugin.repository,
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: questions.map(([name, text]) => ({
        '@type': 'Question',
        name,
        acceptedAnswer: { '@type': 'Answer', text },
      })),
    },
  ]
}

function pluginDescription(plugin, locale) {
  const fallback = locale === 'zh'
    ? `${plugin.repository} 是一个 DeepSeek Harness 社区插件。目录已校验其公开插件元数据并提供固定提交版本的安装命令，上游暂未提供详细功能介绍。`
    : `${plugin.repository} is a community plugin for DeepSeek Harness. The directory has checked its public plugin metadata and provides a commit-pinned install command; no detailed upstream description is available yet.`
  return cleanText(plugin.description) || fallback
}

function relatedPlugins(plugin) {
  return catalog.plugins
    .filter((candidate) => candidate.repository !== plugin.repository && candidate.language === plugin.language)
    .slice(0, 6)
}

function renderPluginPage(plugin, locale) {
  const current = locales[locale]
  const isZh = locale === 'zh'
  const [owner, repository] = repositoryParts(plugin)
  const path = pluginPath(plugin, locale)
  const alternatePath = pluginPath(plugin, locale === 'zh' ? 'en' : 'zh')
  const sourceDescription = pluginDescription(plugin, locale)
  const title = truncate(isZh
    ? `${repository} · ${owner} 插件详情与安装 | DSH Plugins`
    : `${repository} plugin by ${owner} | DSH Plugins`, isZh ? 55 : 60)
  const metaDescription = truncate(isZh
    ? `${plugin.repository} DeepSeek Harness 插件详情、版本、许可证与固定提交安装命令。${sourceDescription}`
    : `${plugin.repository} plugin details, version, license, and commit-pinned command for DeepSeek Harness. ${sourceDescription}`, isZh ? 90 : 158)
  const license = plugin.license === 'NOASSERTION' ? (isZh ? '未识别' : 'Unknown') : plugin.license
  const version = plugin.package?.version || (isZh ? '未提供' : 'Not provided')
  const language = plugin.language || (isZh ? '未提供' : 'Not provided')
  const related = relatedPlugins(plugin)
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareSourceCode',
      '@id': `${absolute(path)}#plugin`,
      name: repository,
      description: sourceDescription,
      codeRepository: plugin.url,
      programmingLanguage: plugin.language || undefined,
      license: plugin.license === 'NOASSERTION' ? undefined : plugin.license,
      version: plugin.package?.version || plugin.commit.slice(0, 12),
      dateModified: plugin.updatedAt,
      isPartOf: { '@type': 'WebSite', name: 'DSH Plugins', url: absolute(current.home) },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: isZh ? '插件目录' : 'Plugin directory', item: absolute(current.home) },
        { '@type': 'ListItem', position: 2, name: repository, item: absolute(path) },
      ],
    },
  ]
  const relatedMarkup = related.map((item) => `<li><a href="${pluginPath(item, locale)}">${escapeHtml(item.repository)}</a><span>${escapeHtml(item.package?.version ? `v${item.package.version}` : item.language || '')}</span></li>`).join('')
  const copyLabel = isZh ? '复制安装命令' : 'Copy install command'
  const updated = formatDate(plugin.updatedAt, locale)
  const packageName = plugin.package?.name || (isZh ? '未提供' : 'Not provided')
  const commit = plugin.commit

  return `<!DOCTYPE html>
<html lang="${current.htmlLang}">
  <head>${metaHead({ locale, path, alternatePath, title, description: metaDescription, type: 'article', schema })}
  </head>
  <body data-locale="${locale}">
    <a class="skip-link" href="#main-content">${isZh ? '跳到主要内容' : 'Skip to main content'}</a>
    ${siteHeader(locale, alternatePath)}
    <main class="detail-main shell" id="main-content">
      <nav class="breadcrumbs" aria-label="${isZh ? '面包屑导航' : 'Breadcrumb'}"><a href="${current.home}">${isZh ? '插件目录' : 'Plugin directory'}</a><span aria-hidden="true">/</span><span aria-current="page">${escapeHtml(repository)}</span></nav>
      <article class="plugin-detail">
        <header class="detail-hero"><p class="eyebrow"><span></span>${isZh ? 'DeepSeek Harness 社区插件' : 'DeepSeek Harness community plugin'}</p><p class="detail-owner">${escapeHtml(owner)}</p><h1>${escapeHtml(repository)}</h1><p class="detail-lead">${escapeHtml(sourceDescription)}</p><div class="detail-actions"><a class="primary-link" href="${escapeHtml(plugin.url)}" target="_blank" rel="noopener noreferrer">${isZh ? '查看上游源码' : 'View upstream source'} <span aria-hidden="true">↗</span></a><a class="secondary-link" href="${current.home}">${isZh ? '返回目录' : 'Back to directory'}</a></div></header>

        <section class="detail-section" aria-labelledby="install-title"><p class="section-index">01 / Install</p><h2 id="install-title">${isZh ? '安装命令' : 'Install command'}</h2><p>${isZh ? '下面的命令固定到本目录校验时的 Git 提交。复制后在运行 DeepSeek Harness 的终端执行。' : 'This command is pinned to the Git commit checked by the directory. Copy it and run it in the terminal where DeepSeek Harness is available.'}</p><div class="detail-command"><code>${escapeHtml(plugin.install.command)}</code><button class="copy-button" type="button" data-copy data-command="${escapeHtml(plugin.install.command)}" data-repository="${escapeHtml(plugin.repository)}" aria-label="${escapeHtml(copyLabel)}">${copyLabel}</button></div><p class="commit-note">${isZh ? '固定提交' : 'Pinned commit'} <code>${escapeHtml(commit)}</code></p></section>

        <section class="detail-section" aria-labelledby="metadata-title"><p class="section-index">02 / Metadata</p><h2 id="metadata-title">${isZh ? '插件信息' : 'Plugin metadata'}</h2><dl class="metadata-grid"><div><dt>${isZh ? '包名' : 'Package'}</dt><dd>${escapeHtml(packageName)}</dd></div><div><dt>${isZh ? '版本' : 'Version'}</dt><dd>${escapeHtml(version)}</dd></div><div><dt>${isZh ? '开发语言' : 'Language'}</dt><dd>${escapeHtml(language)}</dd></div><div><dt>${isZh ? '许可证' : 'License'}</dt><dd>${escapeHtml(license)}</dd></div><div><dt>GitHub Stars</dt><dd>${plugin.stars.toLocaleString(isZh ? 'zh-CN' : 'en-US')}</dd></div><div><dt>${isZh ? '目录更新时间' : 'Catalog updated'}</dt><dd><time datetime="${escapeHtml(plugin.updatedAt)}">${escapeHtml(updated)}</time></dd></div></dl></section>

        <section class="detail-section safety-note" aria-labelledby="safety-title"><p class="section-index">03 / Before installing</p><h2 id="safety-title">${isZh ? '安装前检查' : 'Review before installing'}</h2><p>${isZh ? '本目录展示公开仓库数据，不代表官方推荐或安全审计。请确认源码来源、所需权限、许可证条款和配置方式。对于未识别许可证的仓库，不应默认拥有复制、修改或分发权限。' : 'This directory presents public repository data and is not an official endorsement or security audit. Review source provenance, requested permissions, license terms, and configuration. An unknown license must not be treated as permission to copy, modify, or redistribute.'}</p></section>

        ${related.length ? `<section class="detail-section" aria-labelledby="related-title"><p class="section-index">04 / Related</p><h2 id="related-title">${isZh ? '相关插件' : 'Related plugins'}</h2><ul class="related-list">${relatedMarkup}</ul></section>` : ''}
      </article>
    </main>
    ${siteFooter(locale, alternatePath)}
    <div class="toast" id="copy-status" role="status" aria-live="polite" aria-atomic="true"></div>
    <script type="module" src="/copy.js"></script>
  </body>
</html>`
}

function contentPageData(kind, locale) {
  const isZh = locale === 'zh'
  if (kind === 'about') {
    return isZh
      ? {
          title: '关于 DSH Plugins 社区插件目录 | DSH Plugins',
          description: '了解 DSH Plugins 如何发现、校验和更新 DeepSeek Harness 社区插件，以及目录的收录边界和信息修正方式。',
          heading: '关于 DSH Plugins',
          eyebrow: 'About the directory',
          blocks: [
            ['为社区插件提供清晰入口', 'DSH Plugins 是一个面向 DeepSeek Harness 用户与开发者的开放目录。它把分散在 GitHub 的社区插件整理为可搜索页面，展示上游仓库、包版本、许可证、更新时间和可复现的安装命令。'],
            ['数据从哪里来', '目录从带有 dsh-plugin 主题的公开 GitHub 仓库发现候选项目，再校验插件清单与包信息。数据定时同步，插件详情页会标明当前快照的更新时间。'],
            ['收录边界', '收录只说明仓库符合目录的公开元数据规则，不等于 DeepSeek 官方认可、安全审计或功能质量保证。用户安装前应独立检查源码、权限、配置、维护状态和许可证。'],
            ['修正与贡献', '如果插件缺失或信息有误，可以为公开仓库补充 dsh-plugin 主题和有效插件清单，也可以在目录的 GitHub 仓库提交问题或贡献修正。'],
          ],
        }
      : {
          title: 'About the DeepSeek Harness Plugin Directory | DSH Plugins',
          description: 'Learn how DSH Plugins discovers, validates, and refreshes DeepSeek Harness community plugins, including listing boundaries and correction paths.',
          heading: 'About DSH Plugins',
          eyebrow: 'About the directory',
          blocks: [
            ['A clear entry point for community plugins', 'DSH Plugins is an open directory for DeepSeek Harness users and developers. It turns community repositories scattered across GitHub into searchable pages with upstream source, package version, license, update time, and reproducible install commands.'],
            ['Where the data comes from', 'The catalog discovers public GitHub repositories carrying the dsh-plugin topic, then checks their plugin manifest and package metadata. Data is refreshed regularly and each detail page states when its snapshot was updated.'],
            ['What inclusion means', 'A listing only means that a repository meets the public metadata rules of this directory. It is not approval by DeepSeek, a security audit, or a guarantee of quality. Review source, permissions, configuration, maintenance, and license before installing.'],
            ['Corrections and contributions', 'If a plugin is missing or inaccurate, add the dsh-plugin topic and a valid plugin manifest to its public repository, or open an issue and contribute a correction in the directory repository.'],
          ],
        }
  }

  return isZh
    ? {
        title: '隐私说明 | DSH Plugins',
        description: 'DSH Plugins 的隐私与数据处理说明，包括搜索参数、公开目录数据、Cloudflare 技术日志以及外部 GitHub 链接。',
        heading: '隐私说明',
        eyebrow: 'Privacy',
        blocks: [
          ['无需账号', '浏览和搜索 DSH Plugins 不需要注册或登录。站点不会要求你提交姓名、邮箱或其他个人资料。'],
          ['本地搜索与网址参数', '插件筛选在浏览器内完成。为了支持分享搜索结果，关键词、语言、许可证和排序方式可能写入当前网址的查询参数。站点不会把这些条件用于建立个人画像。'],
          ['基础设施日志', '站点运行在 Cloudflare Workers。为保障可用性、安全性和排查故障，Cloudflare 及 Worker 可处理请求所必需的技术信息，例如 IP 地址、浏览器信息、请求路径和时间。目录不设置广告追踪器。'],
          ['外部链接', '插件源码与项目协作页面位于 GitHub。离开本站后，外部服务会按照各自的隐私政策处理数据。'],
          ['更新说明', `本说明最后更新于 ${formatDate(catalog.generatedAt, 'zh')}。如站点的数据处理方式发生实质变化，本页将同步更新。`],
        ],
      }
    : {
        title: 'Privacy Notice | DSH Plugins',
        description: 'Privacy and data handling information for DSH Plugins, including search parameters, public catalog data, Cloudflare technical logs, and GitHub links.',
        heading: 'Privacy notice',
        eyebrow: 'Privacy',
        blocks: [
          ['No account required', 'Browsing and searching DSH Plugins does not require registration or sign-in. The site does not ask you to submit a name, email address, or other profile information.'],
          ['Local search and URL parameters', 'Plugin filtering runs in your browser. To make a search shareable, the query, language, license, and sort order may appear in the current URL. The directory does not use these values to build personal profiles.'],
          ['Infrastructure logs', 'The site runs on Cloudflare Workers. Cloudflare and the Worker may process technical request information needed for availability, security, and diagnostics, such as an IP address, browser information, requested path, and time. The directory does not install advertising trackers.'],
          ['External links', 'Plugin source and project collaboration pages are hosted by GitHub. Once you leave this site, external services process data under their own privacy policies.'],
          ['Updates', `This notice was last updated on ${formatDate(catalog.generatedAt, 'en')}. Material changes to data handling will be reflected on this page.`],
        ],
      }
}

function renderContentPage(kind, locale) {
  const current = locales[locale]
  const isZh = locale === 'zh'
  const data = contentPageData(kind, locale)
  const path = kind === 'about' ? current.about : current.privacy
  const otherLocale = locale === 'zh' ? 'en' : 'zh'
  const alternatePath = kind === 'about' ? locales[otherLocale].about : locales[otherLocale].privacy
  const type = kind === 'about' ? 'AboutPage' : 'WebPage'
  const schema = [{
    '@context': 'https://schema.org',
    '@type': type,
    name: data.heading,
    url: absolute(path),
    description: data.description,
    inLanguage: current.htmlLang,
    isPartOf: { '@type': 'WebSite', name: 'DSH Plugins', url: absolute(current.home) },
    dateModified: catalog.generatedAt,
  }]
  const content = data.blocks.map(([heading, body], index) => `<section class="content-block"><p class="section-index">${String(index + 1).padStart(2, '0')}</p><h2>${escapeHtml(heading)}</h2><p>${escapeHtml(body)}</p></section>`).join('')

  return `<!DOCTYPE html>
<html lang="${current.htmlLang}">
  <head>${metaHead({ locale, path, alternatePath, title: data.title, description: data.description, schema })}
  </head>
  <body>
    <a class="skip-link" href="#main-content">${isZh ? '跳到主要内容' : 'Skip to main content'}</a>
    ${siteHeader(locale, alternatePath)}
    <main class="content-main shell" id="main-content"><header class="content-hero"><p class="eyebrow"><span></span>${data.eyebrow}</p><h1>${data.heading}</h1><p>${data.description}</p></header><div class="content-layout">${content}</div></main>
    ${siteFooter(locale, alternatePath)}
  </body>
</html>`
}

function renderSitemap() {
  const staticPages = [
    { path: '/', alternate: '/en', priority: '1.0' },
    { path: '/en', alternate: '/', priority: '0.8' },
    { path: '/about', alternate: '/en/about', priority: '0.5' },
    { path: '/en/about', alternate: '/about', priority: '0.4' },
    { path: '/privacy', alternate: '/en/privacy', priority: '0.3' },
    { path: '/en/privacy', alternate: '/privacy', priority: '0.2' },
  ]
  const pluginPages = catalog.plugins.flatMap((plugin) => [
    { path: pluginPath(plugin, 'zh'), alternate: pluginPath(plugin, 'en'), priority: '0.7', lastmod: plugin.updatedAt },
    { path: pluginPath(plugin, 'en'), alternate: pluginPath(plugin, 'zh'), priority: '0.6', lastmod: plugin.updatedAt },
  ])
  const entries = [...staticPages, ...pluginPages].map((item) => {
    const zhPath = item.path.startsWith('/en') ? item.alternate : item.path
    const enPath = item.path.startsWith('/en') ? item.path : item.alternate
    return `  <url>\n    <loc>${absolute(item.path)}</loc>\n    <lastmod>${(item.lastmod || catalog.generatedAt).slice(0, 10)}</lastmod>\n    <xhtml:link rel="alternate" hreflang="zh-CN" href="${absolute(zhPath)}"/>\n    <xhtml:link rel="alternate" hreflang="en" href="${absolute(enPath)}"/>\n    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute(zhPath)}"/>\n    <priority>${item.priority}</priority>\n  </url>`
  }).join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries}\n</urlset>\n`
}

function renderFeed() {
  const items = [...catalog.plugins]
    .sort((a, b) => new Date(b.pushedAt) - new Date(a.pushedAt))
    .slice(0, 50)
    .map((plugin) => `<item><title>${escapeHtml(plugin.repository)}</title><link>${absolute(pluginPath(plugin, 'zh'))}</link><guid isPermaLink="true">${absolute(pluginPath(plugin, 'zh'))}</guid><pubDate>${new Date(plugin.pushedAt).toUTCString()}</pubDate><description>${escapeHtml(pluginDescription(plugin, 'zh'))}</description></item>`)
    .join('')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>DSH Plugins 最新插件</title><link>${siteUrl}/</link><description>DeepSeek Harness 社区插件目录更新</description><language>zh-cn</language><lastBuildDate>${new Date(catalog.generatedAt).toUTCString()}</lastBuildDate>${items}</channel></rss>\n`
}

function renderLlms(full = false) {
  const intro = `# DSH Plugins\n\n> DSH Plugins is a bilingual community directory for discovering and installing DeepSeek Harness plugins. Catalog data comes from public GitHub repositories and inclusion is not a security audit or official endorsement.\n\n## Main pages\n\n- [Chinese plugin directory](${siteUrl}/): Search all plugins and read the Chinese install guide.\n- [English plugin directory](${siteUrl}/en): Search all plugins and read the English install guide.\n- [About](${siteUrl}/en/about): Catalog methodology and listing boundaries.\n- [Privacy](${siteUrl}/en/privacy): Data handling notice.\n- [Source repository](https://github.com/lwmxiaobei/dsh-plugins): Catalog source and contribution workflow.\n`
  if (!full) return `${intro}\n## Plugin data\n\n- [Machine-readable catalog](${siteUrl}/api/plugins): Current JSON catalog.\n- [XML sitemap](${siteUrl}/sitemap.xml): Canonical bilingual page inventory.\n`
  const plugins = catalog.plugins.map((plugin) => `- [${plugin.repository}](${absolute(pluginPath(plugin, 'en'))}): ${cleanText(pluginDescription(plugin, 'en'))}`).join('\n')
  return `${intro}\n## Plugins\n\n${plugins}\n`
}

async function writeRoute(pathname, content) {
  const output = join(outputDirectory, `${pathname.replace(/^\//, '') || 'index'}.html`)
  await mkdir(dirname(output), { recursive: true })
  await writeFile(output, content)
}

await rm(outputDirectory, { recursive: true, force: true })
await cp(sourceDirectory, outputDirectory, { recursive: true })
await mkdir(dirname(catalogOutput), { recursive: true })
await writeFile(catalogOutput, `${JSON.stringify(catalog)}\n`)

const updatedZh = formatDate(catalog.generatedAt, 'zh')
const updatedEn = formatDate(catalog.generatedAt, 'en')
const firstCardsZh = catalog.plugins.slice(0, pageSize).map((plugin, index) => renderPluginCard(plugin, 'zh', index)).join('')
const firstCardsEn = catalog.plugins.slice(0, pageSize).map((plugin, index) => renderPluginCard(plugin, 'en', index)).join('')
const detailRepositories = JSON.stringify(catalog.plugins.map((plugin) => plugin.repository.toLowerCase())).replaceAll('<', '\\u003c')

for (const locale of ['zh', 'en']) {
  const filename = locale === 'zh' ? 'index.html' : 'en.html'
  const source = await readFile(join(sourceDirectory, filename), 'utf8')
  const output = source
    .replaceAll('{{PLUGIN_COUNT}}', String(catalog.count))
    .replaceAll('{{CATALOG_UPDATED_ZH}}', updatedZh)
    .replaceAll('{{CATALOG_UPDATED_EN}}', updatedEn)
    .replace('{{PLUGIN_CARDS_ZH}}', firstCardsZh)
    .replace('{{PLUGIN_CARDS_EN}}', firstCardsEn)
    .replace('{{DETAIL_REPOSITORIES}}', detailRepositories)
    .replace('{{STRUCTURED_DATA}}', homeSchema(locale).map(jsonScript).join('\n    '))
  await writeFile(join(outputDirectory, filename), output)
}

await Promise.all([
  writeRoute('/about', renderContentPage('about', 'zh')),
  writeRoute('/en/about', renderContentPage('about', 'en')),
  writeRoute('/privacy', renderContentPage('privacy', 'zh')),
  writeRoute('/en/privacy', renderContentPage('privacy', 'en')),
  ...catalog.plugins.flatMap((plugin) => [
    writeRoute(pluginPath(plugin, 'zh'), renderPluginPage(plugin, 'zh')),
    writeRoute(pluginPath(plugin, 'en'), renderPluginPage(plugin, 'en')),
  ]),
])

await Promise.all([
  writeFile(join(outputDirectory, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /catalog/\n\nSitemap: ${siteUrl}/sitemap.xml\n`),
  writeFile(join(outputDirectory, 'sitemap.xml'), renderSitemap()),
  writeFile(join(outputDirectory, 'feed.xml'), renderFeed()),
  writeFile(join(outputDirectory, 'llms.txt'), renderLlms()),
  writeFile(join(outputDirectory, 'llms-full.txt'), renderLlms(true)),
])

console.log(`网站构建完成：${catalog.plugins.length} 个插件，${catalog.plugins.length * 2 + 6} 个可索引页面。`)
