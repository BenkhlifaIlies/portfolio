import Image from 'next/image'
import { CardProps } from '@/constants/types'
import Link from 'next/link'

const Card = ({ title, excerpt, tags, image, repo, demo }: CardProps) => {
  return (
    <div className="mb-12 flex flex-col gap-2 rounded-xl shadow-md lg:shadow-lg bg-neutral-100 dark:bg-slate-900 hover:scale-[1.02] ">
      <Link href={`/projects/${title}`}>
        <div className="!relative h-64 lg:h-96 w-full overflow-hidden rounded-t-xl">
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
              <Link href={repo} target="_blank" className="hover:text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="inline-block mr-2"
                  viewBox="0 0 256 256"
                >
                  <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                </svg>
              </Link>
              <Link
                href={demo}
                target="_blank"
                aria-description="open live demo"
                className="hover:text-accent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="inline-block"
                  viewBox="0 0 256 256"
                >
                  <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 my-1">
            {tags.map((tag, index) => {
              return (
                <span
                  key={`tag-${index}`}
                  className="mr-1 text-xs inline-flex items-center font-semibold capitalize py-1 px-2 rounded-md bg-primary/50"
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
