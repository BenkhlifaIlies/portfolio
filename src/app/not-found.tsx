import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
}

export default function Custom404() {
  return (
    <>
      <div className="w-full mt-32 m-auto text-center">
        <h1 className="font-bold text-7xl capitalize">error 404</h1>
        <p className="my-6 text-xl font-semibold capitalize">
          Sorry, this page could not be found
        </p>
        <div className="my-6 flex justify-center ">
          <Link
            href="/"
            className="capitalize font-semibold text-white py-2 px-4 rounded-lg bg-primary cursor-pointer hover:bg-primary/70 flex items-center"
          >
            return to home
          </Link>
        </div>
      </div>
    </>
  )
}
