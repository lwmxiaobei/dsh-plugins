const UPSTREAM_CATALOG_URL = 'https://raw.githubusercontent.com/lwmxiaobei/dsh-plugins/main/catalog/plugins.json'
const CACHE_SECONDS = 15 * 60

function jsonResponse(body, init = {}) {
  const headers = new Headers(init.headers)
  headers.set('Content-Type', 'application/json; charset=utf-8')
  headers.set('X-Content-Type-Options', 'nosniff')

  return new Response(JSON.stringify(body), {
    ...init,
    headers,
  })
}

function catalogResponse(response, source) {
  const headers = new Headers(response.headers)
  headers.set('Cache-Control', `public, max-age=60, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=86400`)
  headers.set('Content-Type', 'application/json; charset=utf-8')
  headers.set('X-Catalog-Source', source)
  headers.set('X-Content-Type-Options', 'nosniff')

  return new Response(response.body, {
    headers,
    status: response.status,
    statusText: response.statusText,
  })
}

async function fetchBundledCatalog(request, env) {
  const fallbackUrl = new URL('/catalog/plugins.json', request.url)
  const fallbackRequest = new Request(fallbackUrl, {
    headers: request.headers,
    method: request.method,
  })
  const response = await env.ASSETS.fetch(fallbackRequest)
  return catalogResponse(response, 'bundled')
}

async function fetchCatalog(request, env, ctx) {
  const cache = caches.default
  const cacheKey = new Request(new URL('/api/plugins', request.url), { method: 'GET' })
  const cached = await cache.match(cacheKey)
  if (cached) return catalogResponse(cached, cached.headers.get('X-Catalog-Source') || 'cache')

  try {
    const upstream = await fetch(UPSTREAM_CATALOG_URL, {
      cf: {
        cacheEverything: true,
        cacheTtl: CACHE_SECONDS,
      },
      headers: {
        Accept: 'application/json',
        'User-Agent': 'dsh-plugins-worker',
      },
    })

    if (!upstream.ok) throw new Error(`上游目录返回 ${upstream.status}`)

    const response = catalogResponse(upstream, 'github')
    ctx.waitUntil(cache.put(cacheKey, response.clone()))
    return response
  } catch (error) {
    console.error('读取上游插件目录失败，改用部署内目录。', error)
    return fetchBundledCatalog(request, env)
  }
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)

    if (url.pathname === '/api/plugins') {
      if (request.method !== 'GET' && request.method !== 'HEAD') {
        return jsonResponse(
          { error: 'method_not_allowed', message: '仅支持 GET 和 HEAD 请求。' },
          { status: 405, headers: { Allow: 'GET, HEAD' } },
        )
      }

      const response = await fetchCatalog(request, env, ctx)
      if (request.method === 'HEAD') {
        return new Response(null, {
          headers: response.headers,
          status: response.status,
          statusText: response.statusText,
        })
      }
      return response
    }

    if (url.pathname.startsWith('/api/')) {
      return jsonResponse(
        { error: 'not_found', message: '接口不存在。' },
        { status: 404 },
      )
    }

    return env.ASSETS.fetch(request)
  },
}
