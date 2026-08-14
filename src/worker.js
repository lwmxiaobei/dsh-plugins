const UPSTREAM_CATALOG_URL = 'https://raw.githubusercontent.com/lwmxiaobei/dsh-plugins/main/catalog/plugins.json'
const CACHE_SECONDS = 15 * 60
const PRODUCTION_HOST = 'dsh-plugins.org'

function isPreviewHost(hostname) {
  return hostname.endsWith('.workers.dev')
}

function canonicalRedirect(url) {
  let pathname = url.pathname

  if (pathname.endsWith('/index.html')) {
    pathname = pathname.slice(0, -'/index.html'.length) || '/'
  } else if (pathname.endsWith('.html') && pathname !== '/404.html') {
    pathname = pathname.slice(0, -'.html'.length) || '/'
  } else if (pathname.length > 1 && pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1)
  }

  if (pathname === url.pathname) return null
  const target = new URL(url)
  target.pathname = pathname
  return Response.redirect(target, 308)
}

function staticResponse(response, url) {
  const headers = new Headers(response.headers)
  const contentType = headers.get('Content-Type') || ''
  const preview = isPreviewHost(url.hostname)

  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  headers.set('X-Content-Type-Options', 'nosniff')
  headers.set('X-Frame-Options', 'DENY')
  headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')

  if (url.hostname === PRODUCTION_HOST) {
    headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
  }

  if (contentType.includes('text/html')) {
    headers.set('Cache-Control', 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400')
    headers.set('Content-Language', url.pathname === '/en' || url.pathname.startsWith('/en/') ? 'en' : 'zh-CN')
    if (preview || response.status === 404) {
      headers.set('X-Robots-Tag', 'noindex, nofollow')
    }
  } else if (contentType.includes('application/json')) {
    headers.set('Cache-Control', 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400')
    headers.set('X-Robots-Tag', 'noindex, nofollow')
  } else {
    headers.set('Cache-Control', 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800')
  }

  return new Response(response.body, {
    headers,
    status: response.status,
    statusText: response.statusText,
  })
}

function jsonResponse(body, init = {}) {
  const headers = new Headers(init.headers)
  headers.set('Content-Type', 'application/json; charset=utf-8')
  headers.set('X-Content-Type-Options', 'nosniff')
  headers.set('X-Robots-Tag', 'noindex, nofollow')

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
  headers.set('X-Robots-Tag', 'noindex, nofollow')

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

    if (url.hostname === `www.${PRODUCTION_HOST}`) {
      const target = new URL(url)
      target.hostname = PRODUCTION_HOST
      return Response.redirect(target, 308)
    }

    const redirect = canonicalRedirect(url)
    if (redirect) return redirect

    if (isPreviewHost(url.hostname) && url.pathname === '/robots.txt') {
      return new Response('User-agent: *\nDisallow: /\n', {
        headers: {
          'Cache-Control': 'public, max-age=300',
          'Content-Type': 'text/plain; charset=utf-8',
          'X-Content-Type-Options': 'nosniff',
        },
      })
    }

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

    const response = await env.ASSETS.fetch(request)
    return staticResponse(response, url)
  },
}
