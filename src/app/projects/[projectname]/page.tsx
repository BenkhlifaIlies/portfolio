import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowIcon, ExternalLinkIcon } from '@/components/icons'
import JsonLd from '@/components/jsonLd'

import { ProjectsData } from '@/constants/data'
import { absoluteUrl, pageMetadata, site } from '@/constants/site'

type Props = {
  params: Promise<{ projectname: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return ProjectsData.map((project) => ({ projectname: project.title }))
}

const getProject = (name: string) => ProjectsData.find((p) => p.title === name)

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projectname } = await params
  const project = getProject(projectname)
  if (!project) return {}

  return pageMetadata({
    title: project.name,
    description: project.excerpt,
    path: `/projects/${project.title}`,
    images: [
      {
        url: `/projects/${project.thumbnail}`,
        alt: `${project.name} screenshot`,
      },
    ],
  })
}

export default async function Projectname({ params }: Props) {
  const { projectname } = await params
  const projectData = getProject(projectname)
  if (!projectData) notFound()

  const path = `/projects/${projectData.title}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: projectData.name,
        description: projectData.excerpt,
        url: projectData.demo,
        image: absoluteUrl(`/projects/${projectData.thumbnail}`),
        screenshot: projectData.screenshots?.map((img) =>
          absoluteUrl(`/projects/${img}`),
        ),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Web',
        keywords: projectData.tags.join(', '),
        codeRepository: projectData.repo,
        author: { '@type': 'Person', name: site.name, url: absoluteUrl('/') },
        offers: { '@type': 'Offer', price: 0, priceCurrency: 'USD' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { name: 'Home', path: '/' },
          { name: 'Projects', path: '/projects' },
          { name: projectData.name, path },
        ].map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: absoluteUrl(crumb.path),
        })),
      },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="max-w-xl mx-auto mt-4 mb-8 pb-8">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center font-semibold mb-4"
        >
          <Link className="capitalize px-1 hover:text-accent" href="/">
            home
          </Link>
          <ArrowIcon />
          <Link className="capitalize px-1 hover:text-accent" href="/projects">
            projects
          </Link>
          <ArrowIcon />
          <Link
            className="capitalize px-1 hover:text-accent"
            href={path}
          >{`${projectData.title}`}</Link>
        </nav>

        <div className="relative h-64 lg:h-80 w-full overflow-hidden rounded-lg mb-8">
          <Image
            src={`/projects/${projectData.thumbnail}`}
            alt={`${projectData.title} screenshot`}
            preload
            fill
            quality={100}
            sizes="(max-width: 768px) 100vw, 576px"
            className="object-cover"
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
              <span className="h-fit w-fit bg-secondary/50 rounded-sm px-1">
                stack
              </span>
            </div>
            <div className="col-span-5 flex flex-wrap gap-1">
              {projectData.stack.map((el, index) => {
                return (
                  <span
                    key={`${el}-${index}`}
                    className="capitalize font-semibold px-1 rounded-sm bg-accent/40 h-fit"
                  >
                    {el}
                  </span>
                )
              })}
            </div>
          </li>
          <li className="grid grid-cols-6 py-1 mb-1">
            <div className=" capitalize font-bold col-span-1 flex mr-4 justify-end">
              <span className="h-fit w-fit bg-secondary/50 rounded-sm px-1">
                demo
              </span>
            </div>
            <span className="col-span-5 text-accent flex flex-nowrap align-middle items-center md:gap-1">
              <Link
                href={projectData.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                {projectData.demo}
                <ExternalLinkIcon />
              </Link>
            </span>
          </li>
          <li className="grid grid-cols-6 py-1 mb-1">
            <div className=" capitalize font-bold col-span-1 flex mr-4 justify-end">
              <span className="h-fit w-fit bg-secondary/50 rounded-sm px-1">
                repo
              </span>
            </div>

            <span className="col-span-5 text-accent flex flex-nowrap align-middle items-center md:gap-1">
              <Link
                href={projectData.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                {projectData.repo}
                <ExternalLinkIcon />
              </Link>
            </span>
          </li>
          <li className="grid grid-cols-6 py-1 mb-1">
            <div className=" capitalize font-bold col-span-1 flex mr-4 justify-end">
              <span className="h-fit w-fit bg-secondary/50 rounded-sm px-1">
                tags
              </span>
            </div>
            <div className="col-span-5 flex flex-wrap gap-1">
              {projectData.tags.map((el, index) => {
                return (
                  <span
                    key={`${el}-${index}`}
                    className="capitalize font-semibold px-1 rounded-sm bg-accent/40"
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
            <h2 className="capitalize font-bold text-lg underline underline-offset-8 decoration-neutral-600 decoration-4 mb-6">
              screenshots
            </h2>
            {projectData.screenshots?.map((img, index) => {
              return (
                <div
                  key={img}
                  className="relative h-64 lg:h-80 w-full overflow-hidden rounded-lg mb-8"
                >
                  <Image
                    src={`/projects/${img}`}
                    alt={`${projectData.title} screenshot ${index + 1}`}
                    fill
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                    className="object-cover"
                  />
                </div>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}
