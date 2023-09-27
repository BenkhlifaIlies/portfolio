import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Layout from '@/components/layouts/mainLayout'

import { ProjectsData } from '@/constants/data'

export async function getStaticPaths() {
  const paths = ProjectsData.map((project) => ({
    params: { projectname: project.title },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  const data = ProjectsData.find((p) => p.title === params?.projectname)
  return {
    props: {
      project: data,
    },
  }
}

export default function Projectname({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title={project.title}>
      <div>
        <p>Title :{project.title}</p>
      </div>
    </Layout>
  )
}
