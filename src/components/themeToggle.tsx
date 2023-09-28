import React, { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from './icons'

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState<string>(
    window.localStorage.getItem('theme') || 'light',
  )

  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light'

  useEffect(() => {
    document.documentElement.classList.add(activeTheme)
    document.documentElement.classList.remove(inactiveTheme)
    window.localStorage.setItem('theme', activeTheme)
  }, [activeTheme, inactiveTheme])

  const switchTheme = () => {
    setActiveTheme(inactiveTheme)
    window.localStorage.setItem('theme', inactiveTheme)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <button
      onClick={switchTheme}
      className="h-8 w-8 flex rounded-md cursor-pointer bg-accent hover:bg-accent/70"
    >
      <span className="m-auto text-white dark:text-black">
        {activeTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  )
}

export default ThemeToggle
