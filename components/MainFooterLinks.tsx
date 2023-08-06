import Link from 'next/link'
import React from 'react'

type Props = {
    title: string,
    links:Record<string,string[]>
}
const MainFooterLinks = ({ title,links }:Props) => {
  return (
    <div>
          <h1 className='text-body-md mb-1'>{title}</h1>
          <ul className='flex flex-col gap-y-1 font-extralight'>
              {
                  links[title].map((link) => (
                      <Link key={link} href='/'>
                          {link}
                    </Link>
                 ))
              }
          </ul>
    </div>
  )
}

export default MainFooterLinks
