import { FooterLinks, address, socialLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MainFooterLinks from './MainFooterLinks'

type KeyType=Partial <'Our company'|'Categories'|'Menu' |string>

const ProductFooter = () => {
    return (
      <>
    <div className='bg-primary-dark text-primary-white p-4 sm:p-14 flex justify-start sm:justify-center md:justify-between flex-wrap gap-6'>
          <section>
              <h1 className='text-head-lg font-light mb-4'>Avion</h1>
              <article className='flex flex-col gap-1 font-extralight'>
                  {
                      address.map(({ target, data }) => (
                          <p key={target}>{data}</p>
                      ))
                  }
              </article>
      </section>
          <section className='3'>
              <h1 className='text-body-sm font-extralight mb-4'>Social links</h1>
              <article className='grid grid-cols-3 sm:grid-cols-6 gap-2'>
              {
                      socialLinks.map((social) => (
                          <Link key={social.link} href={social.link}>
                              <Image width={25} height={25} src={social.icon} alt={social.link} />
                          </Link>
                      ))
              }
              </article>
      </section>
          <section className='grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-10'>
          {
                      Object.keys(FooterLinks).map((group:KeyType) => (
                          <MainFooterLinks key={group} title={group} links={FooterLinks} />
                      ))
                  }
          </section>
            </div>
          {/* copy */}
          <section className='flex justify-between p-6 place-items-center bg-primary-dark text-primary-white'>
              <h1 className='text-center w-full sm:text-start'>Copyright 2023 Avion LTD</h1>
      </section>
            </>
  )
}

export default ProductFooter
