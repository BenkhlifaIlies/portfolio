import Image from 'next/image'
import dynamic from 'next/dynamic'

import { ProjectsData } from '@/constants/data'

import Layout from '../components/layouts/mainLayout'
import ProjectList from '@/components/projectList'
import Terminal from '@/components/teminal'
import SocialLinks from '@/components/socialLinks'
import Spinner from '@/components/spinner'
import Button from '@/components/button'
import { ContactIcon, ThreeDotsIcon } from '@/components/icons'

const PROJECTSTOSHOW = 4

const LazyModel = dynamic(() => import('../components/model'), {
  ssr: false,
  loading: () => <Spinner />,
})

export default function Home() {
  return (
    <Layout title="Homepage">
      <div className="flex flex-row justify-center items-center mx-auto w-[280px] h-[280px]">
        <LazyModel />
      </div>

      <div className="mb-12">
        <div className="flex flex-row justify-start items-center p-4 rounded-xl bg-transparent/5 dark:bg-slate-800/50">
          <Image
            src="/ilies-profile-pic.png"
            width={32}
            height={32}
            quality={100}
            alt="ilies benkhelifa profile picture"
            className="w-32 aspect-[1/1] rounded-full shadow-lg border-solid border-primary border-2 p-1"
          />
          <div className="ml-4 flex flex-col gap-2">
            <h2 className="font-bold text-2xl capitalize">Ilyes Benkhelifa</h2>
            <h5 className="text-xl capitalize">
              a passionate full-stack developer
            </h5>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="capitalize font-bold text-lg underline underline-offset-8 decoration-neutral-600 decoration-4 my-4 mb-6">
          hello 👋
        </h3>
        <p className="text-justify indent-4 leading-7">
          My name is Ilyes Benkhelifa, a full-stack developer. I have always
          been fascinated by the power and creativity of the web, I love to
          learn new technologies, and I am eager to improve my skills, I even
          write blogs about that.
          <br />
        </p>
        <Button
          label="contact me"
          link="mailto:theiliesbenkhlifa@gmail.com"
          icon={<ContactIcon />}
        />
      </div>

      <div className="mb-12">
        <h3 className="capitalize font-bold text-lg underline underline-offset-8 decoration-neutral-600 decoration-4 mb-6">
          projects
        </h3>
        <p className="capitalize text-justify indent-4 leading-7">
          Here are a few of my favorite projects:
        </p>
        <div className="w-full lg:grid grid-cols-2 auto-rows-[600px] gap-x-8 my-12">
          <ProjectList list={ProjectsData.slice(0, PROJECTSTOSHOW)} />
        </div>
        <Button label="see more" link="/projects" icon={<ThreeDotsIcon />} />
      </div>

      <Terminal />

      <SocialLinks />
    </Layout>
  )
}
