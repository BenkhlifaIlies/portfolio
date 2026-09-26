import type { Metadata } from 'next'

// Set SITE_URL in the environment (see .env.example); on Vercel and Netlify
// the production domain is used automatically.
const rawSiteUrl =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL &&
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  (process.env.NETLIFY === 'true' && process.env.URL) ||
  undefined

// Canonical URLs and sitemap entries must be absolute, so a production build
// without a site URL is a configuration error rather than a silent SEO bug.
if (!rawSiteUrl && process.env.NODE_ENV === 'production') {
  throw new Error(
    'SITE_URL is not set. Set it to the public URL of the site (see .env.example).',
  )
}

export const siteUrl = rawSiteUrl && new URL(rawSiteUrl).origin

export const site = {
  name: 'Ilyes Benkhelifa',
  jobTitle: 'Full-Stack Developer',
  description:
    'Ilyes Benkhelifa is a full-stack developer from Oran, Algeria, building web and mobile apps with TypeScript, React, React Native and Next.js.',
  locale: 'en_US',
  twitter: '@IlyesBenkhlifa',
  email: 'theiliesbenkhlifa@gmail.com',
  image: '/ilies-profile-pic.png',
  keywords: [
    'Ilyes Benkhelifa',
    'Ilies Benkhelifa',
    'full-stack developer',
    'web developer',
    'mobile developer',
    'React',
    'React Native',
    'Next.js',
    'TypeScript',
    'Oran',
    'Algeria',
    'portfolio',
  ],
  sameAs: [
    'https://github.com/BenkhlifaIlies',
    'https://www.linkedin.com/in/ilyesbenkhelifa/',
    'https://twitter.com/IlyesBenkhlifa',
    'https://blog.iliesbenkhelifa.com/',
  ],
}

/** Resolves a site-relative path against SITE_URL, when it is known. */
export const absoluteUrl = (path: string) =>
  siteUrl ? new URL(path, siteUrl).toString() : path

interface PageMetadata {
  title: string
  description: string
  path: string
  images?: { url: string; alt: string }[]
}

/**
 * Per-page metadata. Next replaces (rather than merges) nested objects such
 * as openGraph, so every page needs its full set of fields.
 */
export const pageMetadata = ({
  title,
  description,
  path,
  images,
}: PageMetadata): Metadata => {
  const socialTitle = title.includes(site.name)
    ? title
    : `${title} | ${site.name}`
  // Fall back to the generated site-wide images (src/app/opengraph-image.tsx).
  const defaultImage = { width: 1200, height: 630, alt: socialTitle }

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: site.name,
      locale: site.locale,
      url: path,
      title: socialTitle,
      description,
      images: images ?? [{ url: '/opengraph-image', ...defaultImage }],
    },
    twitter: {
      card: 'summary_large_image',
      site: site.twitter,
      creator: site.twitter,
      title: socialTitle,
      description,
      images: images ?? [{ url: '/twitter-image', ...defaultImage }],
    },
  }
}
