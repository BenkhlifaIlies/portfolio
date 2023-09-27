import React from 'react'
import ProjectList from '@/components/projectList'

import { ProjectsData } from '@/constants/data'
import Layout from '@/components/layouts/mainLayout'

export default function Projects() {
  return (
    <Layout title="Projects">
      <div className="w-full text-center">
        <h3 className="capitalize  font-bold text-2xl underline underline-offset-4 decoration-4 decoration-accent mb-4">
          projects
        </h3>
        <p className="capitalize">a collection of my projects.</p>
      </div>

      <div className="w-full lg:grid grid-cols-2 auto-rows-[600px] gap-x-8 my-16">
        <ProjectList list={ProjectsData} />
      </div>
    </Layout>
  )
}
