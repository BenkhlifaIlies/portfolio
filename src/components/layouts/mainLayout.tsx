import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Spinner from '@/components/spinner'

const LazyModel = dynamic(() => import('../model'), {
  ssr: false,
  loading: () => <Spinner />,
})
interface Props {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ilyes Benkhelifa's homepage" />
        <meta name="author" content="Benkhelifa Ilyes" />
        <meta name="author" content="ilies Benkhelifa" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IlyesBenkhlifa" />
        <meta name="twitter:creator" content="@IlyesBenkhlifa" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="BenkhelifaIlyes's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>BenkhelifaIlyes - Homepage</title>
      </Head>
      <Header />
      <main className="pt-16 grow bg-background text-text">
        <div className="max-w-3xl mx-auto px-8">
          <div className="flex flex-row justify-center items-center mx-auto w-[280px] h-[280px]">
            <LazyModel />
          </div>
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
