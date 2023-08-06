import { FooterLinks, socialLinks } from '@/constants'
import React from 'react'
import MainFooterLinks from './MainFooterLinks'
import SignUpBar from './SignUpBar'
import Link from 'next/link'
import Image from 'next/image'
type KeyType=Partial <'Our company'|'Categories'|'Menu' |string>

const MainFooter = () => {
    
  return (
    <footer className='bg-wood-text bg-center  bg-cover bg-no-repeat bg-primary-dark text-primary-white p-4 md:p-10 lg:px-40'>
          <section className='flex  flex-col gap-4 md:flex-row place-content-around border-b-2 border-b-primary-light p-6'>
              <article className='flex flex-wrap  gap-x-10 w-full md:w-1/2'>
                  {
                      Object.keys(FooterLinks).map((group:KeyType) => (
                          <MainFooterLinks key={group} title={group} links={FooterLinks} />
                      ))
                  }
              </article>
              <article className=' w-full lg:w-6/12'>
                  <h1 className='text-head-md font-light mb-4'>Join our mailing list</h1>
                  <SignUpBar mode='dark' />
              </article>
      </section>
      {/* copyright part */}
          <section className='flex justify-between p-6 place-items-center'>
              <h1 className='text-center w-full sm:text-start'>Copyright 2023 Avion LTD</h1>
              <div className='hidden sm:flex gap-4'>
                  {
                      socialLinks.map((social) => (
                          <Link key={social.link} href={social.link}>
                              <Image width={30} height={30} src={social.icon} alt={social.link} />
                          </Link>
                      ))
                  }
              </div>
      </section>
    </footer>
  )
}

export default MainFooter
