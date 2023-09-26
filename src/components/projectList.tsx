import { CardProps } from '@/constants/types'
import React from 'react'
import Card from './card'

interface Props {
  list: CardProps[]
}

const ProjectList = ({ list }: Props) => {
  return (
    <>
      {list.map((project) => {
        return <Card key={project.title} {...project} />
      })}
    </>
  )
}

export default ProjectList
