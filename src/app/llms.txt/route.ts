import { ProjectsData, terminalData } from '@/constants/data'
import { absoluteUrl, site } from '@/constants/site'

export const dynamic = 'force-static'

// llms.txt (https://llmstxt.org): a Markdown summary of the site for AI agents.
export function GET() {
  const skills = terminalData.find((t) => t.input === 'me.getSkills()')

  const body = `# ${site.name}

> ${site.description}

${site.name} is a ${site.jobTitle.toLowerCase()} based in Oran, Algeria, with an MSc in Software Engineering from the University of Constantine 2, and a freelance developer since 2022.${skills ? `\n\nSkills: ${JSON.parse(skills.output).join(', ')}.` : ''}

## Pages

- [Home](${absoluteUrl('/')}): Introduction, featured projects and links
- [About](${absoluteUrl('/about')}): Bio, education and interests
- [Projects](${absoluteUrl('/projects')}): All projects

## Projects

${ProjectsData.map(
  (p) =>
    `- [${p.name}](${absoluteUrl(`/projects/${p.title}`)}): ${p.excerpt.replace(/\.?$/, '.')} Built with ${p.stack.join(', ')}. [Live demo](${p.demo}), [source code](${p.repo}).`,
).join('\n')}

## Contact

- [Email](mailto:${site.email})
${site.sameAs.map((url) => `- [${new URL(url).hostname.replace(/^www\./, '')}](${url})`).join('\n')}
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
