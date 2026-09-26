import type { MetadataRoute } from 'next'
import { site } from '@/constants/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} - ${site.jobTitle}`,
    short_name: site.name,
    description: site.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#faf9f5',
    theme_color: '#faf9f5',
    icons: [
      { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}
