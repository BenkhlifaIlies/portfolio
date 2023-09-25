import { CardProps } from './types'

export const terminalData: { input: string; output: string }[] = [
  {
    input: 'me.getCurrentLocation()',
    output: 'Dubai, UAE',
  },

  {
    input: 'me.getInterests()',
    output: '["Web Development", "Mobile Development"]',
  },
  {
    input: 'me.getEducation()',
    output: 'MSc Software Engineering - University Of Constantine 2',
  },
  {
    input: 'me.getSkills()',
    output:
      '[ "JavaScript", "Typescript", "React", "NextJS", "React Native", "Tailwind", "SASS", "Git" ... ]',
  },
]

export const ProjectsData: CardProps[] = [
  {
    title: 'sortviz',
    excerpt:
      'SortViz is a minimal visualization tool that helps you visualize how different sorting algorithms work in real-time in an elegant modern design.',
    tags: ['react', 'typescript', 'styled-components', 'PWA'],
    image: 'sortviz-snapshot.png',
    repo: 'https://github.com/BenkhlifaIlies/sort-viz',
    demo: 'https://sortviz-benkhelifailyes.netlify.app',
  },
  {
    title: 'pathviz',
    excerpt:
      'PathViz is a visualization tool that allows you to see how various path finding algorithms function in real-time. It has a sleek, modern design and is simple to use',
    tags: ['react', 'typescript', 'styled-components', 'PWA'],
    image: 'pathviz-snapshot.png',
    repo: 'https://github.com/BenkhlifaIlies/path-viz',
    demo: 'https://pathviz-benkhelifailyes.netlify.app',
  },
]
