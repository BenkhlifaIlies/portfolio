import { Project } from './types'

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

export const ProjectsData: Project[] = [
  {
    title: 'sortviz',
    thumbnail: 'sortviz-snapshot.png',
    excerpt:
      'SortViz is a minimal visualization tool that helps you visualize how different sorting algorithms work in real-time in an elegant modern design.',
    demo: 'https://sortviz-benkhelifailyes.netlify.app',
    repo: 'https://github.com/BenkhlifaIlies/sort-viz',
    description: `SortViz is a tool that helps you visualize how different sorting algorithms work.
    With this app, you can see how algorithms like Bubble Sort, Selection Sort, Insertion Sort, Merge Sort and Quick Sort work in real-time.
    This app is designed to be easy to use and understand, whether you're a student learning about sorting algorithms for the first time or an experienced developer looking to optimize your code, SortViz can help you gain a deeper understanding of how these algorithms work.
    I genuinely hope you enjoy experimenting with this visualization tool as much as I did building it.`,
    stack: ['react', 'typescript', 'styled-components'],
    tags: ['react', 'algorithms', 'PWA', 'tool'],
    screenshots: null,
  },
  {
    title: 'pathviz',
    thumbnail: 'pathviz-snapshot.png',
    excerpt:
      'PathViz is a visualization tool that allows you to see how various path finding algorithms function in real-time. It has a sleek, modern design and is simple to use',
    demo: 'https://pathviz-benkhelifailyes.netlify.app',
    repo: 'https://github.com/BenkhlifaIlies/path-viz',
    description: `Path finding algorithms are methods for finding the shortest or most optimal path between two points in a graph, such as a map or a network. They are widely used in navigation, routing, artificial intelligence and many more fascinating applications.
    PathViz is a powerful tool that helps you visualize how different path finding algorithms work. With this app, you can see how algorithms like Dijkstra’s algorithm, A* algorithm, Breadth-first search (BFS) and Depth-first search (DFS) work in real-time.
    I genuinely hope you enjoy experimenting with this visualization tool as much as I did building it.`,
    stack: ['react', 'typescript', 'styled-components'],
    tags: ['react', 'algorithms', 'tool', 'PWA'],
    screenshots: null,
  },
]
