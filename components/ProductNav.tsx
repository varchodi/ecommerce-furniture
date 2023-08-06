import { FooterLinks, productNavLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductNav = () => {
  return (
      <nav className='flex justify-between border-2 bg-primary-white border-light-grey place-items-center py-2 px-6 md:px-10'>
          <section>
              <Link className='text-head-lg font-light text-primary-dark' href='/' >
                  Avion
              </Link>
          </section>
          <section className='hidden md:flex gap-4 text-primary-dark  '>
              {
                  FooterLinks.Categories.map((category) => (
                      <Link
                          className='hover:underline'
                          key={category} href={`/search?category=${category}`} >{category}</Link>
                  ))
              }
          </section>
          <section className='flex gap-4'>
              {
                  productNavLinks.map(({ link, icon },i) => 
                  (
                      <Link
                          className=''  
                          href={`/${link}`} key={i} >
                          <Image width={20} height={20} src={icon} alt={link} />
                      </Link>
                  )
                  )
              }
              <button className='block md:hidden'>
                   <Image width={20} height={20} src='/icons/menu-icon.svg' alt='menu' />
              </button>
          </section>
    </nav>
  )
}

export default ProductNav
