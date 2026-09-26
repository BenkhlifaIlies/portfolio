import Image from 'next/image'
import { CardProps } from '@/constants/types'
import Link from 'next/link'
import { ExternalLinkIcon, GithubIcon } from './icons'

interface Props extends CardProps {
  headingLevel?: 'h2' | 'h3'
}

const Card = ({
  title,
  excerpt,
  tags,
  thumbnail,
  repo,
  demo,
  headingLevel: Heading = 'h3',
}: Props) => {
  return (
    <div className="h-full mb-12 flex flex-col gap-2 rounded-xl shadow-md lg:shadow-lg bg-neutral-100 dark:bg-slate-900 hover:scale-[1.02] ">
      <Link href={`/projects/${title}`} aria-label={`${title} project details`}>
        <div className="relative h-64 lg:h-96 w-full overflow-hidden rounded-t-xl">
          <Image
            src={`/projects/${thumbnail}`}
            alt={`${title} screenshot`}
            fill
            quality={100}
            sizes="(max-width: 1024px) 100vw, 352px"
            className="object-cover"
          />
        </div>
      </Link>

      <div className="p-4 space-y-2 flex flex-col justify-between col-span-7">
        <div>
          <div className="flex flex-row justify-between">
            <Heading className="capitalize text-2xl font-bold mb-2">
              {title}
            </Heading>
            <div>
              <Link
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} source code on GitHub`}
                className="hover:text-primary"
              >
                <GithubIcon />
              </Link>
              <Link
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live demo`}
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

          <p className="leading-relaxed my-4 line-clamp-4">{excerpt}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
