'use client'

import { useEffect } from 'react'
import { themeScript } from '@/constants/theme'
import { inter } from './fonts'
import './globals.css'

const getSavedTheme = () => {
  try {
    return window.localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

// Replaces the root layout when it fails, so it renders its own document and
// can't rely on the header, footer or anything else from layout.tsx.
export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string }
  retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  // This document usually renders on the client after a crash, when the
  // inline theme script no longer runs, so read the saved theme directly.
  const theme = getSavedTheme()

  return (
    <html
      lang="en"
      className={`${inter.variable} ${theme}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <title>Something Went Wrong | Ilyes Benkhelifa</title>
      </head>
      <body className="bg-background text-text">
        <main
          className="grow flex flex-col items-center justify-center px-8 text-center"
          role="alert"
        >
          <h1 className="font-bold text-5xl capitalize">
            something went wrong
          </h1>
          <p className="my-6 text-xl font-semibold">
            An unexpected error occurred. Please try again.
          </p>
          {error.digest && (
            <p className="text-sm text-text/80">Error ID: {error.digest}</p>
          )}
          <div className="my-6 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => retry()}
              className="capitalize font-semibold text-white py-2 px-4 rounded-lg bg-primary cursor-pointer hover:bg-primary/70"
            >
              try again
            </button>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- a full reload rebuilds the failed root layout */}
            <a
              href="/"
              className="capitalize font-semibold py-2 px-4 rounded-lg border-2 border-primary hover:bg-primary/10"
            >
              return to home
            </a>
          </div>
        </main>
      </body>
    </html>
  )
}
