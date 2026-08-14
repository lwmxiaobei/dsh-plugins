import assert from 'node:assert/strict'
import { readFile, readdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const dist = join(root, 'dist')
const catalog = JSON.parse(await readFile(join(root, 'catalog/plugins.json'), 'utf8'))

async function read(relativePath) {
  return readFile(join(dist, relativePath), 'utf8')
}

function matches(html, pattern) {
  return [...html.matchAll(pattern)].map((match) => match[1])
}

function routeFile(pathname) {
  if (pathname === '/') return 'index.html'
  return `${pathname.replace(/^\//, '')}.html`
}

function assertMetadata(html, expected) {
  assert.equal(matches(html, /<h1(?:\s[^>]*)?>([\s\S]*?)<\/h1>/g).length, 1)
  assert.match(html, new RegExp(`<html lang="${expected.lang}"`))
  assert.match(html, /<meta name="description" content="[^"]+">/)
  assert.match(html, /<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">/)
  assert.match(html, new RegExp(`<link rel="canonical" href="${expected.canonical.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}">`))
  assert.match(html, /<link rel="alternate" hreflang="zh-CN" href="https:\/\/dsh-plugins\.org\//)
  assert.match(html, /<link rel="alternate" hreflang="en" href="https:\/\/dsh-plugins\.org\/en/)
  assert.match(html, /<meta property="og:image:width" content="1200">/)
  assert.match(html, /<meta property="og:image:height" content="630">/)
  assert.doesNotMatch(html, /meta name="keywords"/i)
  assert.doesNotMatch(html, /{{[A-Z_]+}}/)

  for (const value of matches(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    assert.doesNotThrow(() => JSON.parse(value))
  }
}

test('双语首页提供完整元数据、可见内容与结构化数据', async () => {
  const pages = [
    { file: 'index.html', lang: 'zh-CN', canonical: 'https://dsh-plugins.org/', types: ['WebSite', 'CollectionPage', 'FAQPage'] },
    { file: 'en.html', lang: 'en', canonical: 'https://dsh-plugins.org/en', types: ['WebSite', 'CollectionPage', 'FAQPage'] },
  ]

  for (const page of pages) {
    const html = await read(page.file)
    assertMetadata(html, page)
    assert.equal(matches(html, /<li data-prerendered="[^"]+">/g).length, 24)
    assert.match(html, /<section class="editorial-section" id="install-guide"/)
    assert.equal(matches(html, /<details>/g).length, 4)
    const schemas = matches(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g).map(JSON.parse)
    assert.deepEqual(schemas.map((item) => item['@type']), page.types)
    assert.equal(schemas[1].mainEntity.numberOfItems, catalog.count)
    assert.equal(schemas[2].mainEntity.length, 4)
    const repositories = JSON.parse(matches(html, /<script type="application\/json" id="detail-repositories">([\s\S]*?)<\/script>/g)[0])
    assert.equal(repositories.length, catalog.count)
    assert.equal(new Set(repositories).size, catalog.count)
  }
})

test('每个插件都有唯一的双语静态详情页', async () => {
  const titles = new Set()
  const descriptions = new Set()

  for (const plugin of catalog.plugins) {
    const [owner, repository] = plugin.repository.split('/').map((part) => encodeURIComponent(part.toLowerCase()))
    for (const locale of ['zh', 'en']) {
      const path = `${locale === 'en' ? '/en' : ''}/plugins/${owner}/${repository}`
      const html = await read(routeFile(path))
      assertMetadata(html, {
        lang: locale === 'zh' ? 'zh-CN' : 'en',
        canonical: `https://dsh-plugins.org${path}`,
      })
      assert.match(html, new RegExp(plugin.commit))
      assert.match(html, /<script type="module" src="\/copy\.js"><\/script>/)
      const schemas = matches(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g).map(JSON.parse)
      assert.deepEqual(schemas.map((item) => item['@type']), ['SoftwareSourceCode', 'BreadcrumbList'])
      assert.equal(schemas[0].codeRepository, plugin.url)

      const title = matches(html, /<title>([\s\S]*?)<\/title>/g)[0]
      const description = matches(html, /<meta name="description" content="([^"]+)">/g)[0]
      assert.ok(!titles.has(`${locale}:${title}`), `标题重复：${locale}:${title}`)
      assert.ok(!descriptions.has(`${locale}:${description}`), `描述重复：${locale}:${description}`)
      titles.add(`${locale}:${title}`)
      descriptions.add(`${locale}:${description}`)
    }
  }

  assert.equal(titles.size, catalog.count * 2)
})

test('站点地图只包含可索引规范网址且均有构建产物', async () => {
  const sitemap = await read('sitemap.xml')
  const locations = matches(sitemap, /<loc>([^<]+)<\/loc>/g)
  assert.equal(locations.length, catalog.count * 2 + 6)
  assert.equal(new Set(locations).size, locations.length)
  assert.equal(matches(sitemap, /hreflang="x-default"/g).length, locations.length)

  for (const location of locations) {
    const url = new URL(location)
    assert.equal(url.origin, 'https://dsh-plugins.org')
    await assert.doesNotReject(() => read(routeFile(url.pathname)))
  }
})

test('抓取、订阅、AI 发现与应用清单文件完整', async () => {
  const robots = await read('robots.txt')
  assert.equal(robots, 'User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /catalog/\n\nSitemap: https://dsh-plugins.org/sitemap.xml\n')

  const feed = await read('feed.xml')
  assert.equal(matches(feed, /<item>/g).length, 50)
  assert.match(feed, /<rss version="2\.0">/)

  const manifest = JSON.parse(await read('manifest.webmanifest'))
  assert.equal(manifest.name, 'DSH Plugins')
  assert.deepEqual(manifest.icons.map((icon) => icon.sizes), ['192x192', '512x512'])

  assert.match(await read('llms.txt'), /Machine-readable catalog/)
  assert.equal(matches(await read('llms-full.txt'), /^- \[[^\]]+\]\(https:\/\/dsh-plugins\.org\/en\/plugins\//gm).length, catalog.count)

  const ogImage = await readFile(join(dist, 'og-image.png'))
  assert.equal(ogImage.subarray(1, 4).toString(), 'PNG')
  assert.equal(ogImage.readUInt32BE(16), 1200)
  assert.equal(ogImage.readUInt32BE(20), 630)
})

test('信任页面可索引而错误页明确禁止索引', async () => {
  for (const page of [
    ['about.html', 'zh-CN', 'https://dsh-plugins.org/about'],
    ['en/about.html', 'en', 'https://dsh-plugins.org/en/about'],
    ['privacy.html', 'zh-CN', 'https://dsh-plugins.org/privacy'],
    ['en/privacy.html', 'en', 'https://dsh-plugins.org/en/privacy'],
  ]) {
    assertMetadata(await read(page[0]), { lang: page[1], canonical: page[2] })
  }

  const notFound = await read('404.html')
  assert.match(notFound, /<meta name="robots" content="noindex,nofollow">/)
  assert.match(notFound, /<title>页面未找到 \| DSH Plugins<\/title>/)
})

test('站内页面链接不会指向缺失页面', async () => {
  const files = (await readdir(dist, { recursive: true }))
    .filter((file) => file.endsWith('.html'))

  for (const file of files) {
    const html = await read(file)
    const hrefs = matches(html, /href="([^"]+)"/g)
    for (const href of hrefs) {
      if (!href.startsWith('/') || href.startsWith('//')) continue
      const pathname = new URL(href, 'https://dsh-plugins.org').pathname
      if (/\.[a-z0-9]+$/i.test(pathname)) {
        await assert.doesNotReject(() => read(pathname.slice(1)))
      } else {
        await assert.doesNotReject(() => read(routeFile(pathname)))
      }
    }
  }
})
