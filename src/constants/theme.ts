// Runs before first paint so the saved theme is applied without a flash.
export const themeScript = `
  const theme = window.localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
  document.documentElement.classList.add(theme)
`
