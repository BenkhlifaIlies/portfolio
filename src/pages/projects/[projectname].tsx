import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/layouts/mainLayout'
import { ArrowIcon, ExternalLinkIcon } from '@/components/icons'
import { Project } from '@/constants/types'

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
  const projectData = project as Project
  return (
    <Layout title={projectData.title}>
      <div className="max-w-xl mx-auto mt-4 mb-8 pb-8">
        <div className="flex items-center font-semibold mb-4">
          <Link className="capitalize px-1 hover:text-accent" href="/">
            home
          </Link>
          <ArrowIcon />
          <Link className="capitalize px-1 hover:text-accent" href="/projects/">
            projects
          </Link>
          <ArrowIcon />
          <Link
            className="capitalize px-1 hover:text-accent"
            href={`/projects/${projectData.title}/`}
          >{`${projectData.title}`}</Link>
        </div>

        <div className="!relative max-h-64 lg:h-80 w-full overflow-hidden rounded-lg mb-8">
          <Image
            src={`/projects/${projectData.thumbnail}`}
            alt={`${projectData.title} snapshot`}
            fill
            loading="lazy"
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            className="!relative object-cover "
          />
        </div>

        <h1 className="capitalize text-2xl font-bold  mb-8">
          {projectData.title}
        </h1>

        <p className="text-justify indent-4 leading-7  mb-8">
          {projectData.description}
        </p>

        <ul className=" mb-8">
          <li className="grid grid-cols-6 py-1 mb-1">
            <div className=" capitalize font-bold col-span-1 flex mr-4 justify-end">
              <span className="h-fit w-fit bg-secondary/50 rounded px-1">
                stack
              </span>
            </div>
            <div className="col-span-5 flex flex-wrap gap-1">
              {projectData.stack.map((el, index) => {
                return (
                  <span
                    key={`${el}-${index}`}
                    className="capitalize font-semibold px-1 rounded bg-accent/40 h-fit"
                  >
                    {el}
                  </span>
                )
              })}
            </div>
          </li>
          <li className="grid grid-cols-6 py-1 mb-1">
            <div className=" capitalize font-bold col-span-1 flex mr-4 justify-end">
              <span className="h-fit w-fit bg-secondary/50 rounded px-1">
                demo
              </span>
            </div>
            <span className="col-span-5 text-accent dark:text-secondary flex flex-nowrap align-middle items-center md:gap-1">
              <Link href={projectData.demo} target="_blank">
                {projectData.demo}
                <ExternalLinkIcon />
              </Link>
            </span>
          </li>
          <li className="grid grid-cols-6 py-1 mb-1">
            <div className=" capitalize font-bold col-span-1 flex mr-4 justify-end">
              <span className="h-fit w-fit bg-secondary/50 rounded px-1">
                repo
              </span>
            </div>

            <span className="col-span-5 text-accent dark:text-secondary flex flex-nowrap align-middle items-center md:gap-1">
              <Link href={projectData.repo} target="_blank">
                {projectData.repo}
                <ExternalLinkIcon />
              </Link>
            </span>
          </li>
          <li className="grid grid-cols-6 py-1 mb-1">
            <div className=" capitalize font-bold col-span-1 flex mr-4 justify-end">
              <span className="h-fit w-fit bg-secondary/50 rounded px-1">
                tags
              </span>
            </div>
            <div className="col-span-5 flex flex-wrap gap-1">
              {projectData.tags.map((el, index) => {
                return (
                  <span
                    key={`${el}-${index}`}
                    className="capitalize font-semibold px-1 rounded bg-accent/40"
                  >
                    {el}
                  </span>
                )
              })}
            </div>
          </li>
        </ul>

        {projectData.screenshots && (
          <div>
            <h3 className="capitalize font-bold text-lg underline underline-offset-8 decoration-neutral-600 decoration-4 mb-6">
              screenshots
            </h3>
            {projectData.screenshots?.map((img, index) => {
              return (
                <div
                  key={`screeshot-${index}`}
                  className="!relative max-h-64 lg:h-80 w-full overflow-hidden rounded-lg mb-8"
                >
                  <Image
                    src={`/projects/${img}`}
                    alt={`screeshot-${index}`}
                    fill
                    loading="lazy"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                    className="!relative object-cover "
                  />
                </div>
              )
            })}
          </div>
        )}
      </div>
    </Layout>
  )
}
