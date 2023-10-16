import React from 'react'
import Link from 'next/link'
import { BlogLogo, GithubIcon, LinkedInIcon, TwitterIcon } from './icons'

const SocialLinks = () => {
  return (
    <div className="mb-12">
      <h3 className="capitalize font-bold text-lg underline underline-offset-8 decoration-neutral-600 decoration-4 my-4 mb-6">
        find me on the web
      </h3>
      <ul className="pl-4 font-semibold">
        <li className="my-2 hover:text-accent w-fit">
          <Link href="blog.iliesbenkhelifa.com" target="_blank">
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
  )
}

export default SocialLinks
