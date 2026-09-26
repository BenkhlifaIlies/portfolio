import type { Metadata } from 'next'
import ProjectList from '@/components/projectList'

import { ProjectsData } from '@/constants/data'
import { pageMetadata } from '@/constants/site'

export const metadata: Metadata = pageMetadata({
  title: 'Projects',
  description:
    'Projects by Ilyes Benkhelifa, including SortViz and PathViz: interactive tools that visualize sorting and path-finding algorithms in real time.',
  path: '/projects',
})

export default function Projects() {
  return (
    <>
      <div className="w-full text-center">
        <h1 className="capitalize  font-bold text-2xl underline underline-offset-4 decoration-4 decoration-accent mb-4">
          projects
        </h1>
        <p className="capitalize">a collection of my projects.</p>
      </div>

      <div className="w-full lg:grid grid-cols-2 auto-rows-[600px] gap-x-8 my-16">
        <ProjectList list={ProjectsData} headingLevel="h2" />
      </div>
    </>
  )
}
