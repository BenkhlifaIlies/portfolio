import type { Metadata, Viewport } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { site, siteUrl } from '@/constants/site'
import { themeScript } from '@/constants/theme'
import { inter } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    template: `%s | ${site.name}`,
    default: `${site.name} - ${site.jobTitle}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: site.keywords,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: site.locale,
    title: `${site.name} - ${site.jobTitle}`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    site: site.twitter,
    creator: site.twitter,
    title: `${site.name} - ${site.jobTitle}`,
    description: site.description,
  },
  formatDetection: { email: false, address: false, telephone: false },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf9f5' },
    { media: '(prefers-color-scheme: dark)', color: '#050311' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Header />
        <main className="pt-16 grow bg-background text-text">
          <div className="max-w-3xl mx-auto px-8">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
