import React from 'react'
import Link from 'next/link'

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
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="inline ml-2"
              >
                <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
              </svg>
            </span>
          </Link>
        </nav>
      </div>
    </>
  )
}

export default MobileMenu
