import React from 'react'
import Link from 'next/link'
import { ExternalLinkIcon } from './icons'

interface Props {
  open: boolean
}

const MobileMenu: React.FC<Props> = ({ open }: Props) => {
  return (
    <>
      <div
        className="z-50 fixed h-screen top-0 left-0 w-4/5 backdrop-blur-md bg-background dark:bg-very_dark_blue"
        style={
          open
            ? {
                transition: 'transform 0.4s linear',
                transform: 'translateX(0%)',
              }
            : {
                transition: 'transform 0.4s linear',
                transform: 'translateX(-100%)',
              }
        }
      >
        <nav className="w-full h-full flex flex-col justify-center items-center font-bold text-text text-4xl">
          <Link className="capitalize mb-6 hover:text-accent" href="/about/">
            about
          </Link>
          <Link className="capitalize mb-6 hover:text-accent" href="/projects/">
            projects
          </Link>
          <Link
            target="_blank"
            href="https://github.com/BenkhlifaIlies/portfolio"
            className="capitalize mb-6 hover:text-accent"
          >
            view source
            <span className="inline ml-2">
              <ExternalLinkIcon />
            </span>
          </Link>
        </nav>
      </div>
    </>
  )
}

export default MobileMenu
