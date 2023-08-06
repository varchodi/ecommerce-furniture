import Link from 'next/link'
import React from 'react'

const CategoriesBar = ({ categories, page }: { categories: string[], page: string}) => {
  return (
    <ul className={`p-3 capitalize ${page=='home'? 'hidden md:flex':'overflow-auto'} gap-4`}>
        {
          categories.map((category: string) => (
            <Link
              className='text-primary-transparent text-head-xs font-light hover:underline underline-offset-auto'
              key={category} href={`/search?category=${category}`}>
            {category}
          </Link>
        ))
      }
      </ul>
  )
}

export default CategoriesBar
