import type { MetadataRoute } from 'next'
import { absoluteUrl, siteUrl } from '@/constants/site'

export default function robots(): MetadataRoute.Robots {
  // Keep Vercel and Netlify preview deployments out of search results.
  const isPreview =
    (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production') ||
    (process.env.NETLIFY === 'true' && process.env.CONTEXT !== 'production')
  if (isPreview) {
    return { rules: { userAgent: '*', disallow: '/' } }
  }

  return {
    rules: { userAgent: '*', allow: '/' },
    ...(siteUrl && { sitemap: absoluteUrl('/sitemap.xml'), host: siteUrl }),
  }
}
