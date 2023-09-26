import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layouts/mainLayout'
import Terminal from '@/components/teminal'
import { ProjectsData } from '@/constants/data'
import Card from '@/components/card'
import {
  BlogLogo,
  ContactIcon,
  GithubIcon,
  LinkedInIcon,
  ThreeDotsIcon,
  TwitterIcon,
} from '@/components/icons'

export default function Home() {
  return (
    <Layout>
      <div className="mb-12">
        <div className="flex flex-row justify-start items-center p-4 rounded-xl bg-transparent/5">
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
        <div className="my-6 flex justify-center ">
          <Link
            href="mailto:theiliesbenkhlifa@gmail.com"
            className="capitalize font-semibold py-2 px-4 rounded-lg bg-primary cursor-pointer hover:bg-primary/70 flex items-center"
          >
            <span className="capitalize px-2">contact me</span>
            <ContactIcon />
          </Link>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="capitalize font-bold text-lg underline underline-offset-8 decoration-neutral-600 decoration-4 mb-6">
          projects
        </h3>
        <p className="capitalize text-justify indent-4 leading-7">
          Here are a few of my favorite projects:
        </p>
        <div className="mt-6">
          {ProjectsData.map((project) => {
            return <Card key={project.title} {...project} />
          })}
        </div>
        <div className="my-6 flex justify-center ">
          <Link
            href="/projects"
            className="capitalize font-semibold py-2 px-4 rounded-lg bg-primary cursor-pointer hover:bg-primary/70 flex items-center"
          >
            <span className="capitalize px-2">see more</span>

            <ThreeDotsIcon />
          </Link>
        </div>
      </div>

      <Terminal />

      <div className="mb-12">
        <h3 className="capitalize font-bold text-lg underline underline-offset-8 decoration-neutral-600 decoration-4 my-4 mb-6">
          find me on the web
        </h3>
        <ul className="pl-4 font-semibold">
          <li className="my-2 hover:text-accent w-fit">
            <Link href="#" target="_blank">
              <span className="capitalize pr-2">my blog</span>
              <BlogLogo />
            </Link>
          </li>
          <li className="my-2 hover:text-accent w-fit">
            <Link href="https://github.com/BenkhlifaIlies" target="_blank">
              <span className="capitalize pr-2">GitHub</span>
              <GithubIcon />
            </Link>
          </li>
          <li className="my-2 hover:text-accent w-fit">
            <Link
              href="https://www.linkedin.com/in/ilyesbenkhelifa/"
              target="_blank"
            >
              <span className="capitalize pr-2">LinkedIn</span>
              <LinkedInIcon />
            </Link>
          </li>
          <li className="my-2 hover:text-accent w-fit">
            <Link href="https://twitter.com/IlyesBenkhlifa" target="_blank">
              <span className="capitalize pr-2">twitter</span>
              <TwitterIcon />
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  )
}
