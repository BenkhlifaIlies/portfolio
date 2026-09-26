import type { Metadata } from 'next'
import SocialLinks from '@/components/socialLinks'
import { pageMetadata } from '@/constants/site'

export const metadata: Metadata = pageMetadata({
  title: 'About',
  description:
    'About Ilyes Benkhelifa: born in Oran, Algeria, MSc in software engineering from the University of Constantine 2, and a freelance full-stack developer since 2022.',
  path: '/about',
})

export default function About() {
  return (
    <>
      <h1 className="sr-only">About Ilyes Benkhelifa</h1>
      <h2 className="capitalize font-bold text-lg underline underline-offset-8 decoration-neutral-600 decoration-4 my-4 mb-6">
        bio
      </h2>
      <ul className=" mb-8">
        <li className="grid grid-cols-4 py-1 mb-1">
          <div className=" capitalize font-bold col-span-1 flex mr-4 justify-end">
            <span className="h-fit w-fit bg-secondary/50 rounded-sm px-1">
              1997
            </span>
          </div>
          <p className="col-span-3">Born in Oran, Algeria.</p>
        </li>
        <li className="grid grid-cols-4 py-1 mb-1">
          <div className=" capitalize font-bold col-span-1 flex mr-4 justify-end">
            <span className="h-fit w-fit bg-secondary/50 rounded-sm px-1">
              2021
            </span>
          </div>
          <p className="col-span-3">
            Earned my master&#39;s degree in software engineering at the
            University of Constantine 2
          </p>
        </li>
        <li className="grid grid-cols-4 py-1 mb-1">
          <div className=" capitalize font-bold col-span-1 flex mr-4 justify-end">
            <span className="h-fit w-fit bg-secondary/50 rounded-sm px-1">
              2022 onward
            </span>
          </div>
          <p className="col-span-3">Working as a freelancer</p>
        </li>
      </ul>

      <h2 className="capitalize font-bold text-lg underline underline-offset-8 decoration-neutral-600 decoration-4 my-4 mb-6">
        interests
      </h2>
      <p className="capitalize text-justify indent-4 leading-7">
        Philosophy, Stoicism, Astronomy, Gym, Podcasts, Football, Blogging,
        Cooking
      </p>
      <SocialLinks />
    </>
  )
}
