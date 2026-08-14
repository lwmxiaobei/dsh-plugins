import assert from 'node:assert/strict'
import test from 'node:test'
import worker from '../src/worker.js'

function environment(response = new Response('<!doctype html><html lang="zh-CN"></html>', {
  headers: { 'Content-Type': 'text/html; charset=utf-8' },
})) {
  return { ASSETS: { fetch: async () => response.clone() } }
}

test('正式 www 域名永久重定向到主域名并保留路径参数', async () => {
  const response = await worker.fetch(
    new Request('https://www.dsh-plugins.org/en/plugins/example/tool?q=vision'),
    environment(),
    {},
  )
  assert.equal(response.status, 308)
  assert.equal(response.headers.get('Location'), 'https://dsh-plugins.org/en/plugins/example/tool?q=vision')
})

test('HTML 别名和末尾斜杠永久重定向到规范路径', async () => {
  for (const [source, target] of [
    ['https://dsh-plugins.org/index.html', 'https://dsh-plugins.org/'],
    ['https://dsh-plugins.org/en/', 'https://dsh-plugins.org/en'],
    ['https://dsh-plugins.org/about.html', 'https://dsh-plugins.org/about'],
  ]) {
    const response = await worker.fetch(new Request(source), environment(), {})
    assert.equal(response.status, 308)
    assert.equal(response.headers.get('Location'), target)
  }
})

test('预览域名禁止抓取且页面明确 noindex', async () => {
  const robots = await worker.fetch(new Request('https://dsh-plugins.example.workers.dev/robots.txt'), environment(), {})
  assert.equal(await robots.text(), 'User-agent: *\nDisallow: /\n')

  const page = await worker.fetch(new Request('https://dsh-plugins.example.workers.dev/en'), environment(), {})
  assert.equal(page.headers.get('X-Robots-Tag'), 'noindex, nofollow')
})

test('正式 HTML 响应包含语言、缓存与安全响应头', async () => {
  const response = await worker.fetch(new Request('https://dsh-plugins.org/en/about'), environment(), {})
  assert.equal(response.status, 200)
  assert.equal(response.headers.get('Content-Language'), 'en')
  assert.match(response.headers.get('Cache-Control'), /stale-while-revalidate/)
  assert.match(response.headers.get('Strict-Transport-Security'), /max-age=31536000/)
  assert.equal(response.headers.get('X-Content-Type-Options'), 'nosniff')
  assert.equal(response.headers.get('X-Frame-Options'), 'DENY')
  assert.equal(response.headers.get('X-Robots-Tag'), null)
})

test('错误页面与接口响应不会进入搜索索引', async () => {
  const notFoundEnvironment = environment(new Response('not found', {
    status: 404,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  }))
  const page = await worker.fetch(new Request('https://dsh-plugins.org/missing'), notFoundEnvironment, {})
  assert.equal(page.status, 404)
  assert.equal(page.headers.get('X-Robots-Tag'), 'noindex, nofollow')

  const api = await worker.fetch(new Request('https://dsh-plugins.org/api/missing'), environment(), {})
  assert.equal(api.status, 404)
  assert.equal(api.headers.get('X-Robots-Tag'), 'noindex, nofollow')

  const catalogEnvironment = environment(new Response('{}', {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  }))
  const catalogResponse = await worker.fetch(new Request('https://dsh-plugins.org/catalog/plugins.json'), catalogEnvironment, {})
  assert.equal(catalogResponse.headers.get('X-Robots-Tag'), 'noindex, nofollow')
})
