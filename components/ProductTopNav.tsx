"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const ProductTopNav = () => {
  const [open, setOpen] = useState(true)
  return (
    <section className={`bg-primary-dark ${open? 'flex':'hidden'} place-content-center md:place-content-end`}>
      <article className='w-full md:w-8/12 flex justify-between'>
        <div className='text-primary-white flex gap-3 font-extralight'>
          <Image width={20} height={20} alt='shipping' src='/icons/shopping-white.svg' />
          <p>Free delivery on all orders over £50 with code easter checkouts</p>
        </div>
        <button onClick={()=>setOpen(!open)}>
          <Image width={20} height={20} alt='shipping' src='/icons/cross-white.svg' />
        </button>
      </article>
    </section>
  )
}

export default ProductTopNav
