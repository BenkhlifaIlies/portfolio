export interface CardProps {
  thumbnail: string
  title: string
  excerpt: string
  tags: string[]
  repo: string
  demo: string
}

export interface Project extends CardProps {
  name: string
  description: string
  screenshots?: string[] | null
  stack: string[]
}
