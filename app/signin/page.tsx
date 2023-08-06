import GoogleBtn from '@/components/GoogleBtn'
import { getCurrentUser } from '@/lib/sessions'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async() => {
  const session = await getCurrentUser();
  if (session?.user) redirect('/profile');
  return (
    <section className='flex justify-betwen place-content-center'>
      <article className='w-full md:w-1/2 flex flex-col  min-h-max justify-around p-10'>
        <div className='flex flex-col gap-3'>
          <h1 className='text-head-lg font-bold text-primary-dark'>Welcome to Avion</h1>
          <p className='text-body-md text-primary-light font-extralight'>A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.</p>
        </div>

        <div>
          <h1 className='text-head-sm font-bold text-primary-dark mb-4'>Login or Signup</h1>
          <GoogleBtn/>
        </div>
      </article>
      <article className='w-1/2 hidden md:block'>
        <Image alt='login' src='/images/main_pagehero-image.svg' width={1500} height={1500} /> 
      </article>
    </section>
  )
}

export default page
