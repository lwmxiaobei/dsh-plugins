const locale = document.body.dataset.locale === 'en' ? 'en' : 'zh'
const status = document.querySelector('#copy-status')

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
  if (!copied) throw new Error('Copy was not allowed')
}

document.addEventListener('click', async (event) => {
  const button = event.target.closest('[data-copy]')
  if (!button) return

  const originalLabel = button.textContent
  try {
    await copyText(button.dataset.command)
    button.textContent = locale === 'zh' ? '已复制' : 'Copied'
    button.dataset.state = 'success'
    status.textContent = locale === 'zh'
      ? `${button.dataset.repository} 的安装命令已复制`
      : `Install command for ${button.dataset.repository} copied`
  } catch {
    button.textContent = locale === 'zh' ? '复制失败' : 'Copy failed'
    button.dataset.state = 'error'
    status.textContent = locale === 'zh'
      ? '无法自动复制，请手动选择安装命令'
      : 'Automatic copy failed. Select the command manually.'
  }

  window.setTimeout(() => {
    button.textContent = originalLabel
    delete button.dataset.state
    status.textContent = ''
  }, 1800)
})
