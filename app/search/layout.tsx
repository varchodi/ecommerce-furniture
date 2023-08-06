import Filter from "@/components/Filter"
import MainFooter from "@/components/MainFooter"
import MainHero from "@/components/MainHero"
import MainNav from "@/components/MainNav"
import ProductCard from '@/components/ProductCard'
import SignUpBar from '@/components/SignUpBar'
import { FooterLinks, categories, dummyBrands, dummyPriceRange, sortingCategories } from '@/constants'
import Image from 'next/image'
import React from 'react'


export const metadata = {
  title: 'Avion',
  description: 'Every thing U need is here for u',
}

export default function RootLayout({
  children,params: { id }
}: {
  children: React.ReactNode,params: { id:string }
}) {
  return (
    <>
      <MainNav/>
      <main className='bg-light-grey md:px-14'>
      <section>
        <article className='w-full'>
          <h1 className='w-full text-center text-body-md md:text-head-xl py-4 md:py-14 text-primary-dark font-extralight'>View all products</h1>
        </article>

        <article className='hidden md:flex justify-between place-items-center px-4 md:px-14 overflow-x-auto'>
          <div className='flex gap-8 py-4'>
              <Filter type='category' elements={FooterLinks.Categories}/>

              <Filter type='type' elements={categories}/>

              <Filter type='price' elements={dummyPriceRange}/>

              <Filter type='brand' elements={dummyBrands}/>
          </div>

          <div className="">
            <Filter type='type' elements={categories} />
          </div>
        </article>
        {/* only mobile */}
        <article className='flex md:hidden justify-center gap-10 py-5 px-2'>
              <Filter type='category' elements={FooterLinks.Categories}/>

              <Filter type='type' elements={categories}/>
        </article>
      </section>

      {/* products here */}
      
      {children}

      <section className='bg-primary-white flex flex-col md:flex-row text-primary-dark place-content-center'>
        <article>
          <Image alt='hero' width={800} height={600} src='/images/product-hero-image.png' />
        </article>
        <article className='flex flex-col justify-between p-10'>
          <div className='mb-4'>
            <h1 className='text-body-md capitalize '>Join the club and get the benefits</h1>
            <p className='font-extralight'>Sign up for our newsletter and receive exclusive offers on new ranges,<br /> sales, pop up stores and more</p>
          </div>
          <SignUpBar mode='light' />
        </article>
      </section>
      </main>
      <MainFooter/>
    </>
  )
}
