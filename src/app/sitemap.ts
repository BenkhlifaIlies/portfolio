import type { MetadataRoute } from 'next'
import { ProjectsData } from '@/constants/data'
import { absoluteUrl } from '@/constants/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['/', '/about', '/projects'].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1 : 0.8,
  }))

  const projects = ProjectsData.map((project) => ({
    url: absoluteUrl(`/projects/${project.title}`),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
    images: [absoluteUrl(`/projects/${project.thumbnail}`)],
  }))

  return [...pages, ...projects]
}
