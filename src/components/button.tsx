import React, { ReactNode } from 'react'
import Link from 'next/link'

interface Props {
  label: string
  link: string
  icon?: ReactNode
}
const Button = ({ label, link, icon }: Props) => {
  return (
    <div className="my-6 flex justify-center ">
      <Link
        href={link}
        className="capitalize font-semibold py-2 px-4 rounded-lg bg-primary cursor-pointer hover:bg-primary/70 flex items-center"
      >
        <span className="capitalize px-2">{label}</span>

        {icon}
      </Link>
    </div>
  )
}

export default Button
