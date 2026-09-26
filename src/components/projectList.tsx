import { CardProps } from '@/constants/types'
import React from 'react'
import Card from './card'

interface Props {
  list: CardProps[]
  headingLevel?: 'h2' | 'h3'
}

const ProjectList = ({ list, headingLevel }: Props) => {
  return (
    <>
      {list.map((project) => {
        return (
          <Card key={project.title} headingLevel={headingLevel} {...project} />
        )
      })}
    </>
  )
}

export default ProjectList
