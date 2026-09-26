'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string }
  retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="w-full mt-32 m-auto text-center" role="alert">
      <title>Something Went Wrong | Ilyes Benkhelifa</title>
      <h1 className="font-bold text-5xl capitalize">something went wrong</h1>
      <p className="my-6 text-xl font-semibold">
        An unexpected error occurred while loading this page.
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
        <Link
          href="/"
          className="capitalize font-semibold py-2 px-4 rounded-lg border-2 border-primary hover:bg-primary/10"
        >
          return to home
        </Link>
      </div>
    </div>
  )
}
