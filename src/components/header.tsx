import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import BurgerMenu from './burgerMenu'
import { Logo, MainGithubIcon } from './icons'

const ThemeToggle = dynamic(() => import('./themeToggle'), {
  ssr: false,
  loading: () => (
    <div className="border border-slate-700 shadow rounded-md h-8 w-8 ">
      <div className="h-full w-full animate-pulse flex">
        <div className=" bg-slate-200 h-full w-full rounded-md"></div>
      </div>
    </div>
  ),
})

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg ">
      <div className="w-auto py-2 px-4 h-16 flex flex-row justify-between items-center max-w-3xl mx-auto">
        <Link
          href="/"
          className="flex flex-row justify-center items-center gap-2"
        >
          <Logo />
          <h1 className="font-bold hover:text-accent bg-gradient-to-r bg-clip-text text-transparent from-pink-400 to-purple-500 dark:from-yellow-400 dark:to-orange-500">
            Benkhelifa Ilyes
          </h1>
        </Link>
        <div className="flex items-center">
          <nav className="hidden md:flex items-center font-bold justify-end uppercase">
            <Link className="px-4 text-text hover:text-accent" href="/about/">
              About
            </Link>
            <Link
              className="px-4 text-text hover:text-accent"
              href="/projects/"
            >
              Projects
            </Link>
            <Link
              target="_blank"
              href="https://github.com/BenkhlifaIlies/portfolio"
              className="text-gray-400 hover:text-black dark:hover:text-white px-2"
            >
              <span className="sr-only">GitHub repository</span>
              <span className="h-10 w-10 flexm-auto">
                <MainGithubIcon />
              </span>
            </Link>
          </nav>
          <ThemeToggle />
          <BurgerMenu />
        </div>
      </div>
    </header>
  )
}

export default Header
