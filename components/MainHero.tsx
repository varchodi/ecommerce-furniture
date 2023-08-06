import Link from 'next/link'
import React from 'react'

function MainHero() {
  return (
    <div className='flex flex-col lg:block'>
      <section className='bg-hero-pattern bg-no-repeat bg-cover bg-center h-screen  w-full relative hidden lg:block '>
      <section className='hidden lg:flex flex-col gap-6 lg:gap-y-20 p-2 lg:p-10 bg-primary-white w-full lg:w-4/12 lg:relative lg:top-1/4 lg:left-2/4'>
              <article className=''> 
              <h1 className="text-head-lg font-light">
                Luxury homeware for people who love timeless design quality
               </h1>
                <p className='text-body-md mt-4 hidden lg:block text-primary-light font-extralight'>
                Shop the new Spring 2022 collection today
          </p>
          <p className='mt-4 text-body-md lg:hidden text-primary-light font-extralight'>
          With our new collection, view over 400 bespoke pieces from homeware through to furniture today
                </p>
              </article>
              <article className=' w-full'>  
              <Link  href={'/'} className='text-primary-dark p-4 text-body-sm font-light shadow-sm rounded-md hover:bg-light-grey hover:shadow-md hover:text-primary-light delay-200 w-full text-center md:text-start md:w-fit'>
                  View collection
              </Link>
              </article>
      </section>
          </section>
          <section className='flex lg:hidden flex-col gap-6 lg:gap-y-20 p-10 bg-primary-white w-full lg:w-4/12 lg:relative lg:top-2.5 lg:left-2/4'>
              <article className=''> 
              <h1 className="text-head-lg font-light">
                Luxury homeware for people who love timeless design quality
               </h1>
                <p className='text-body-md mt-4 hidden lg:block text-primary-light font-extralight'>
                Shop the new Spring 2022 collection today
          </p>
          <p className='mt-4 text-body-md lg:hidden text-primary-light font-extralight'>
          With our new collection, view over 400 bespoke pieces from homeware through to furniture today
                </p>
              </article>
              <article className=' w-full'>  
              <Link  href={'/'} className='text-primary-dark px-2 py-2 text-body-sm font-light shadow-sm rounded-md hover:bg-light-grey hover:shadow-md hover:text-primary-light delay-200 w-full text-center md:text-start md:w-fit'>
                  View collection
              </Link>
              </article>
      </section>
      <section className='bg-hero-pattern  lg:hidden bg-no-repeat bg-cover bg-center h-96  w-full'>
      </section>
    </div>
  )
}

export default MainHero