import { createSearchIndex, searchPlugins, uniqueFacetValues } from './search.js'

const PAGE_SIZE = 24
const locale = document.body.dataset.locale === 'en' ? 'en' : 'zh'
const detailRepositories = new Set(
  JSON.parse(document.querySelector('#detail-repositories')?.textContent || '[]'),
)
const messages = locale === 'zh'
  ? {
      all: '全部',
      copied: '已复制',
      copyCommand: '复制命令',
      copyFailed: '复制失败',
      copyFailedStatus: '无法自动复制，请手动选择安装命令',
      defaultDescription: '上游仓库暂未提供介绍',
      found: (count) => `找到 ${count} 个匹配插件`,
      licenseUnknown: '许可证未识别',
      loadFailed: '插件目录加载失败，请稍后刷新重试。',
      more: (count) => `再显示 ${count} 个`,
      total: (count) => `共 ${count} 个插件`,
      copyAria: (repository) => `复制命令：${repository}`,
      copyStatus: (repository) => `${repository} 的安装命令已复制`,
    }
  : {
      all: 'All ',
      copied: 'Copied',
      copyCommand: 'Copy command',
      copyFailed: 'Copy failed',
      copyFailedStatus: 'Automatic copy failed. Select the command manually.',
      defaultDescription: 'The upstream repository has not provided a description yet.',
      found: (count) => `${count} matching plugins`,
      licenseUnknown: 'License unknown',
      loadFailed: 'The plugin directory could not be loaded. Refresh and try again.',
      more: (count) => `Show ${count} more`,
      total: (count) => `${count} plugins`,
      copyAria: (repository) => `Copy command for ${repository}`,
      copyStatus: (repository) => `Install command for ${repository} copied`,
    }

const elements = {
  catalogUpdated: document.querySelector('#catalog-updated'),
  copyStatus: document.querySelector('#copy-status'),
  emptyState: document.querySelector('#empty-state'),
  languageFilter: document.querySelector('#language-filter'),
  licenseFilter: document.querySelector('#license-filter'),
  loadMore: document.querySelector('#load-more'),
  pluginTotal: document.querySelector('#plugin-total'),
  resetFilters: document.querySelector('#reset-filters'),
  resultSummary: document.querySelector('#result-summary'),
  results: document.querySelector('#plugin-results'),
  searchForm: document.querySelector('#search-form'),
  searchInput: document.querySelector('#search-input'),
  sortSelect: document.querySelector('#sort-select'),
  template: document.querySelector('#plugin-card-template'),
}

const state = {
  catalog: null,
  index: [],
  matchedPlugins: [],
  visibleCount: PAGE_SIZE,
}

function formatNumber(value) {
  return new Intl.NumberFormat(locale === 'zh' ? 'zh-CN' : 'en-US').format(value)
}

function formatDate(value) {
  return new Intl.DateTimeFormat(locale === 'zh' ? 'zh-CN' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(value))
}

function buildSelectOptions(select, values, label) {
  const fragment = document.createDocumentFragment()

  for (const value of values) {
    const option = document.createElement('option')
    option.value = value
    option.textContent = value === 'NOASSERTION' ? messages.licenseUnknown : value
    fragment.append(option)
  }

  select.append(fragment)
  select.options[0].textContent = locale === 'zh' ? `${messages.all}${label}` : `${messages.all}${label}`
}

function getFilters() {
  return {
    language: elements.languageFilter.value,
    license: elements.licenseFilter.value,
    sort: elements.sortSelect.value,
  }
}

function hasActiveFilters() {
  return Boolean(
    elements.searchInput.value.trim()
    || elements.languageFilter.value !== 'all'
    || elements.licenseFilter.value !== 'all',
  )
}

function syncUrl() {
  const url = new URL(window.location.href)
  const values = {
    q: elements.searchInput.value.trim(),
    language: elements.languageFilter.value === 'all' ? '' : elements.languageFilter.value,
    license: elements.licenseFilter.value === 'all' ? '' : elements.licenseFilter.value,
    sort: elements.sortSelect.value === 'stars' ? '' : elements.sortSelect.value,
  }

  for (const [key, value] of Object.entries(values)) {
    if (value) url.searchParams.set(key, value)
    else url.searchParams.delete(key)
  }

  history.replaceState(null, '', url)
}

function readUrlState() {
  const params = new URLSearchParams(window.location.search)
  const language = params.get('language')
  const license = params.get('license')
  const sort = params.get('sort')

  elements.searchInput.value = params.get('q') ?? ''
  if (language && [...elements.languageFilter.options].some((option) => option.value === language)) {
    elements.languageFilter.value = language
  }
  if (license && [...elements.licenseFilter.options].some((option) => option.value === license)) {
    elements.licenseFilter.value = license
  }
  if (sort && [...elements.sortSelect.options].some((option) => option.value === sort)) {
    elements.sortSelect.value = sort
  }
}

function createPluginCard(plugin, index) {
  const fragment = elements.template.content.cloneNode(true)
  const listItem = fragment.querySelector('li')
  const repositoryLink = fragment.querySelector('[data-repository]')
  const [owner, repositoryName] = plugin.repository.split('/')
  const languageItem = fragment.querySelector('[data-language-item]')
  const versionItem = fragment.querySelector('[data-version-item]')
  const copyButton = fragment.querySelector('[data-copy]')

  fragment.querySelector('[data-owner]').textContent = owner
  repositoryLink.textContent = repositoryName
  if (detailRepositories.has(plugin.repository.toLowerCase())) {
    repositoryLink.href = `${locale === 'en' ? '/en' : ''}/plugins/${encodeURIComponent(owner.toLowerCase())}/${encodeURIComponent(repositoryName.toLowerCase())}`
  } else {
    repositoryLink.href = plugin.url
    repositoryLink.target = '_blank'
    repositoryLink.rel = 'noopener noreferrer'
  }
  fragment.querySelector('[data-stars]').textContent = formatNumber(plugin.stars)
  fragment.querySelector('[data-description]').textContent = plugin.description || messages.defaultDescription
  fragment.querySelector('[data-license]').textContent = plugin.license === 'NOASSERTION'
    ? messages.licenseUnknown
    : plugin.license
  fragment.querySelector('[data-command]').textContent = plugin.install.command

  if (plugin.language) fragment.querySelector('[data-language]').textContent = plugin.language
  else languageItem.remove()

  if (plugin.package?.version) fragment.querySelector('[data-version]').textContent = plugin.package.version
  else versionItem.remove()

  copyButton.dataset.command = plugin.install.command
  copyButton.dataset.repository = plugin.repository
  copyButton.querySelector('span').textContent = messages.copyCommand
  copyButton.setAttribute('aria-label', messages.copyAria(plugin.repository))
  listItem.dataset.cardIndex = String(Math.min(index, 10))

  return fragment
}

function renderResults() {
  const visiblePlugins = state.matchedPlugins.slice(0, state.visibleCount)
  const fragment = document.createDocumentFragment()

  visiblePlugins.forEach((plugin, index) => fragment.append(createPluginCard(plugin, index)))

  elements.results.replaceChildren(fragment)
  elements.results.setAttribute('aria-busy', 'false')
  elements.resultSummary.textContent = hasActiveFilters()
    ? messages.found(formatNumber(state.matchedPlugins.length))
    : messages.total(formatNumber(state.matchedPlugins.length))
  elements.emptyState.hidden = state.matchedPlugins.length !== 0
  elements.loadMore.hidden = state.visibleCount >= state.matchedPlugins.length
  elements.loadMore.textContent = messages.more(Math.min(PAGE_SIZE, state.matchedPlugins.length - state.visibleCount))
  elements.resetFilters.hidden = !hasActiveFilters()
}

function updateResults({ resetVisible = true } = {}) {
  if (resetVisible) state.visibleCount = PAGE_SIZE
  state.matchedPlugins = searchPlugins(state.index, elements.searchInput.value, getFilters())
  syncUrl()
  renderResults()
}

function resetFilters() {
  elements.searchInput.value = ''
  elements.languageFilter.value = 'all'
  elements.licenseFilter.value = 'all'
  elements.sortSelect.value = 'stars'
  updateResults()
  elements.searchInput.focus()
}

async function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value)
    return
  }

  const input = document.createElement('textarea')
  input.value = value
  input.setAttribute('readonly', '')
  input.style.position = 'fixed'
  input.style.opacity = '0'
  document.body.append(input)
  input.select()
  const copied = document.execCommand('copy')
  input.remove()
  if (!copied) throw new Error('浏览器未允许复制')
}

async function handleCopy(button) {
  const label = button.querySelector('span')
  const originalLabel = label.textContent

  try {
    await copyText(button.dataset.command)
    label.textContent = messages.copied
    button.dataset.state = 'success'
    elements.copyStatus.textContent = messages.copyStatus(button.dataset.repository)
  } catch {
    label.textContent = messages.copyFailed
    button.dataset.state = 'error'
    elements.copyStatus.textContent = messages.copyFailedStatus
  }

  window.setTimeout(() => {
    label.textContent = originalLabel
    delete button.dataset.state
    elements.copyStatus.textContent = ''
  }, 1800)
}

function bindEvents() {
  elements.searchForm.addEventListener('submit', (event) => event.preventDefault())
  elements.searchInput.addEventListener('input', () => updateResults())
  elements.languageFilter.addEventListener('change', () => updateResults())
  elements.licenseFilter.addEventListener('change', () => updateResults())
  elements.sortSelect.addEventListener('change', () => updateResults())
  elements.resetFilters.addEventListener('click', resetFilters)
  elements.emptyState.querySelector('[data-reset]').addEventListener('click', resetFilters)
  elements.loadMore.addEventListener('click', () => {
    state.visibleCount += PAGE_SIZE
    renderResults()
  })
  elements.results.addEventListener('click', (event) => {
    const copyButton = event.target.closest('[data-copy]')
    if (copyButton) handleCopy(copyButton)
  })
  document.addEventListener('keydown', (event) => {
    const element = event.target
    const isEditing = element instanceof HTMLInputElement
      || element instanceof HTMLTextAreaElement
      || element instanceof HTMLSelectElement
      || element.isContentEditable

    if (event.key === '/' && !isEditing && !event.metaKey && !event.ctrlKey && !event.altKey) {
      event.preventDefault()
      elements.searchInput.focus()
    }
  })
}

async function loadCatalog() {
  try {
    const response = await fetch('/api/plugins')
    if (!response.ok) throw new Error(`目录请求失败：${response.status}`)

    state.catalog = await response.json()
    state.index = createSearchIndex(state.catalog.plugins)
    elements.pluginTotal.textContent = formatNumber(state.catalog.count)
    elements.catalogUpdated.textContent = formatDate(state.catalog.generatedAt)
    buildSelectOptions(elements.languageFilter, uniqueFacetValues(state.catalog.plugins, 'language'), locale === 'zh' ? '语言' : 'languages')
    buildSelectOptions(elements.licenseFilter, uniqueFacetValues(state.catalog.plugins, 'license'), locale === 'zh' ? '许可证' : 'licenses')
    readUrlState()
    updateResults()
  } catch (error) {
    console.error(error)
    elements.results.setAttribute('aria-busy', 'false')
    elements.resultSummary.textContent = messages.loadFailed
  }
}

bindEvents()
loadCatalog()
