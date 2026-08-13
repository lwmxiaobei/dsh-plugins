import { createSearchIndex, searchPlugins, uniqueFacetValues } from './search.js'

const PAGE_SIZE = 24
const DEFAULT_DESCRIPTION = '上游仓库暂未提供介绍'

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
  return new Intl.NumberFormat('zh-CN').format(value)
}

function formatDate(value) {
  return new Intl.DateTimeFormat('zh-CN', {
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
    option.textContent = value === 'NOASSERTION' ? '许可证未识别' : value
    fragment.append(option)
  }

  select.append(fragment)
  select.options[0].textContent = `全部${label}`
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
  repositoryLink.href = plugin.url
  fragment.querySelector('[data-stars]').textContent = formatNumber(plugin.stars)
  fragment.querySelector('[data-description]').textContent = plugin.description || DEFAULT_DESCRIPTION
  fragment.querySelector('[data-license]').textContent = plugin.license === 'NOASSERTION'
    ? '许可证未识别'
    : plugin.license
  fragment.querySelector('[data-command]').textContent = plugin.install.command

  if (plugin.language) fragment.querySelector('[data-language]').textContent = plugin.language
  else languageItem.remove()

  if (plugin.package?.version) fragment.querySelector('[data-version]').textContent = plugin.package.version
  else versionItem.remove()

  copyButton.dataset.command = plugin.install.command
  copyButton.dataset.repository = plugin.repository
  copyButton.setAttribute('aria-label', `复制 ${plugin.repository} 的安装命令`)
  listItem.style.setProperty('--card-index', Math.min(index, 10))

  return fragment
}

function renderResults() {
  const visiblePlugins = state.matchedPlugins.slice(0, state.visibleCount)
  const fragment = document.createDocumentFragment()

  visiblePlugins.forEach((plugin, index) => fragment.append(createPluginCard(plugin, index)))

  elements.results.replaceChildren(fragment)
  elements.results.setAttribute('aria-busy', 'false')
  elements.resultSummary.textContent = hasActiveFilters()
    ? `找到 ${formatNumber(state.matchedPlugins.length)} 个匹配插件`
    : `共 ${formatNumber(state.matchedPlugins.length)} 个插件`
  elements.emptyState.hidden = state.matchedPlugins.length !== 0
  elements.loadMore.hidden = state.visibleCount >= state.matchedPlugins.length
  elements.loadMore.textContent = `再显示 ${Math.min(PAGE_SIZE, state.matchedPlugins.length - state.visibleCount)} 个`
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
    label.textContent = '已复制'
    button.dataset.state = 'success'
    elements.copyStatus.textContent = `${button.dataset.repository} 的安装命令已复制`
  } catch {
    label.textContent = '复制失败'
    button.dataset.state = 'error'
    elements.copyStatus.textContent = '无法自动复制，请手动选择安装命令'
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
    buildSelectOptions(elements.languageFilter, uniqueFacetValues(state.catalog.plugins, 'language'), '语言')
    buildSelectOptions(elements.licenseFilter, uniqueFacetValues(state.catalog.plugins, 'license'), '许可证')
    readUrlState()
    updateResults()
  } catch (error) {
    console.error(error)
    elements.results.setAttribute('aria-busy', 'false')
    elements.resultSummary.textContent = '插件目录加载失败，请稍后刷新重试。'
  }
}

bindEvents()
loadCatalog()
