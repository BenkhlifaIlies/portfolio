import type { Metadata } from 'next'
import Image from 'next/image'

import { ProjectsData } from '@/constants/data'

import ProjectList from '@/components/projectList'
import Terminal from '@/components/terminal'
import ModelLoader from '@/components/modelLoader'
import SocialLinks from '@/components/socialLinks'
import Button from '@/components/button'
import { ContactIcon, ThreeDotsIcon } from '@/components/icons'
import JsonLd from '@/components/jsonLd'
import { absoluteUrl, pageMetadata, site } from '@/constants/site'

const PROJECTSTOSHOW = 4

export const metadata: Metadata = {
  ...pageMetadata({
    title: `${site.name} - ${site.jobTitle}`,
    description: site.description,
    path: '/',
  }),
  title: { absolute: `${site.name} - ${site.jobTitle}` },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': absoluteUrl('/#website'),
      url: absoluteUrl('/'),
      name: site.name,
      description: site.description,
      inLanguage: 'en',
      publisher: { '@id': absoluteUrl('/#person') },
    },
    {
      '@type': 'Person',
      '@id': absoluteUrl('/#person'),
      name: site.name,
      alternateName: 'Ilies Benkhelifa',
      url: absoluteUrl('/'),
      image: absoluteUrl(site.image),
      jobTitle: site.jobTitle,
      email: `mailto:${site.email}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Oran',
        addressCountry: 'DZ',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'University of Constantine 2',
      },
      knowsAbout: [
        'Web Development',
        'Mobile Development',
        'JavaScript',
        'TypeScript',
        'React',
        'React Native',
        'Next.js',
        'Node.js',
        'GraphQL',
      ],
      sameAs: site.sameAs,
    },
  ],
}

export default function Home() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <div className="flex flex-row justify-center items-center mx-auto w-[280px] h-[280px]">
        <ModelLoader />
      </div>

      <div className="mb-12">
        <div className="flex flex-row justify-start items-center p-4 rounded-xl bg-transparent/5 dark:bg-slate-800/50">
          <Image
            src="/ilies-profile-pic.png"
            width={128}
            height={128}
            quality={100}
            alt="Portrait of Ilyes Benkhelifa"
            preload
            className="w-32 aspect-[1/1] rounded-full shadow-lg border-solid border-primary border-2 p-1"
          />
          <div className="ml-4 flex flex-col gap-2">
            <h1 className="font-bold text-2xl capitalize">Ilyes Benkhelifa</h1>
            <p className="text-xl capitalize">
              a passionate full-stack developer
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="capitalize font-bold text-lg underline underline-offset-8 decoration-neutral-600 decoration-4 my-4 mb-6">
          hello 👋
        </h2>
        <p className="text-justify indent-4 leading-7">
          My name is Ilyes Benkhelifa, a full-stack developer. I have always
          been fascinated by the power and creativity of the web, I love to
          learn new technologies, and I am eager to improve my skills, I even
          write blogs about that.
          <br />
        </p>
        <Button
          label="contact me"
          link={`mailto:${site.email}`}
          icon={<ContactIcon />}
        />
      </div>

      <div className="mb-12">
        <h2 className="capitalize font-bold text-lg underline underline-offset-8 decoration-neutral-600 decoration-4 mb-6">
          projects
        </h2>
        <p className="capitalize text-justify indent-4 leading-7">
          Here are a few of my favorite projects:
        </p>
        <div className="w-full lg:grid grid-cols-2 auto-rows-[600px] gap-x-8 my-12">
          <ProjectList list={ProjectsData.slice(0, PROJECTSTOSHOW)} />
        </div>
        <Button
          label="see all projects"
          link="/projects"
          icon={<ThreeDotsIcon />}
        />
      </div>

      <Terminal />

      <SocialLinks />
    </>
  )
}
