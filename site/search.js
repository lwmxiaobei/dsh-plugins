const textFormatter = new Intl.Collator('zh-CN', {
  numeric: true,
  sensitivity: 'base',
})

export function normalizeSearchText(value) {
  return String(value ?? '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('zh-CN')
    .replace(/[^\p{Letter}\p{Number}@/._+-]+/gu, ' ')
    .trim()
}

export function createSearchIndex(plugins) {
  return plugins.map((plugin) => {
    const repository = normalizeSearchText(plugin.repository)
    const packageName = normalizeSearchText(plugin.package?.name)
    const description = normalizeSearchText(plugin.description)
    const language = normalizeSearchText(plugin.language)
    const license = normalizeSearchText(plugin.license)

    return {
      plugin,
      repository,
      packageName,
      document: [repository, packageName, description, language, license].join(' '),
    }
  })
}

function relevanceScore(entry, terms, normalizedQuery) {
  let score = 0

  if (entry.repository === normalizedQuery || entry.packageName === normalizedQuery) score += 10_000
  if (entry.repository.startsWith(normalizedQuery) || entry.packageName.startsWith(normalizedQuery)) score += 2_000
  if (entry.repository.includes(normalizedQuery) || entry.packageName.includes(normalizedQuery)) score += 1_000

  for (const term of terms) {
    if (entry.repository.includes(term)) score += 120
    if (entry.packageName.includes(term)) score += 100
    if (entry.document.includes(term)) score += 20
  }

  return score
}

function comparePlugins(left, right, sort) {
  if (sort === 'updated') {
    const dateOrder = Date.parse(right.plugin.pushedAt) - Date.parse(left.plugin.pushedAt)
    if (dateOrder !== 0) return dateOrder
  } else if (sort === 'name') {
    return textFormatter.compare(left.plugin.repository, right.plugin.repository)
  } else if (sort === 'stars') {
    const starOrder = right.plugin.stars - left.plugin.stars
    if (starOrder !== 0) return starOrder
  } else {
    const relevanceOrder = right.score - left.score
    if (relevanceOrder !== 0) return relevanceOrder
    const starOrder = right.plugin.stars - left.plugin.stars
    if (starOrder !== 0) return starOrder
  }

  return textFormatter.compare(left.plugin.repository, right.plugin.repository)
}

export function searchPlugins(index, query, options = {}) {
  const normalizedQuery = normalizeSearchText(query)
  const terms = normalizedQuery.split(' ').filter(Boolean)
  const language = normalizeSearchText(options.language)
  const license = normalizeSearchText(options.license)
  const sort = options.sort ?? (terms.length > 0 ? 'relevance' : 'stars')

  return index
    .filter((entry) => {
      if (terms.some((term) => !entry.document.includes(term))) return false
      if (language && language !== 'all' && normalizeSearchText(entry.plugin.language) !== language) return false
      if (license && license !== 'all' && normalizeSearchText(entry.plugin.license) !== license) return false
      return true
    })
    .map((entry) => ({
      ...entry,
      score: terms.length > 0 ? relevanceScore(entry, terms, normalizedQuery) : 0,
    }))
    .sort((left, right) => comparePlugins(left, right, sort))
    .map((entry) => entry.plugin)
}

export function uniqueFacetValues(plugins, field) {
  const values = plugins
    .map((plugin) => plugin[field])
    .filter(Boolean)

  return [...new Set(values)].sort(textFormatter.compare)
}
