import Image from 'next/image'
import { CardProps } from '@/constants/types'
import Link from 'next/link'
import { ExternalLinkIcon, GithubIcon } from './icons'

const Card = ({ title, excerpt, tags, image, repo, demo }: CardProps) => {
  return (
    <div className="mb-12 flex flex-col gap-2 rounded-xl shadow-md lg:shadow-lg bg-neutral-100 dark:bg-slate-900 hover:scale-[1.02] ">
      <Link href={`/projects/${title}`}>
        <div className="!relative max-h-64 lg:h-96 w-full overflow-hidden rounded-t-xl">
          <Image
            src={`/projects/${image}`}
            alt={`${title} snapshot`}
            fill
            loading="lazy"
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            className="!relative object-cover "
          />
        </div>
      </Link>

      <div className="p-4 space-y-2 flex flex-col justify-between col-span-7">
        <div>
          <div className="flex flex-row justify-between">
            <h3 className="capitalize text-2xl font-bold mb-2">{title}</h3>
            <div>
              <Link href={repo} target="_blank" className="hover:text-primary">
                <GithubIcon />
              </Link>
              <Link
                href={demo}
                target="_blank"
                aria-description="open live demo"
                className="hover:text-primary"
              >
                <ExternalLinkIcon />
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 my-1">
            {tags.map((tag, index) => {
              return (
                <span
                  key={`tag-${index}`}
                  className="mr-1 text-xs inline-flex items-center font-semibold capitalize py-1 px-2 rounded-md bg-secondary"
                >
                  {tag}
                </span>
              )
            })}
          </div>

          <p className="leading-relaxed my-4 max-w-[200ch] h-24">{excerpt}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
