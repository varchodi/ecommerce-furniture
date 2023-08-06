import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MenuButton from './MenuButton'
import CategoriesBar from './CategoriesBar'
import { categories } from '@/constants'

const MainNav = () => {
  return (
    <nav className='bg-[#fff] flex flex-col'>
        <section className="flex flex-row justify-between items-center mx-6 p-1 border-b-2 border-b-light-grey">
          {/* displayed only on big and med screens */}
          <Link href='/search' className='hidden md:block' >
            <Image width={20} height={20} src='/icons/search-icon.svg' alt='search-icon' />
          </Link>

          {/* logo */}
          <Link href='\' className='text-head-lg font-extralight'>
            Avion
          </Link>

          {/* displayed on  big and med screens only */}
          <article className="hidden md:flex justify-center place-items-center gap-4">
            <Link href='/cart' >
              <Image width={20} height={20} src='/icons/shopping_cart-icon.svg' alt='search-icon' />
            </Link>
            <Link href='/profile' >
              <Image width={20} height={20} src='/icons/user_avatar-icon.svg' alt='search-icon' />
            </Link>
          </article>

          {/* displayed on  small screen only */}
          <article className="flex md:hidden justify-center place-items-center gap-4">
            <Link href='/search' >
              <Image width={20} height={20} src='/icons/search-icon.svg' alt='search-icon' />
            </Link>

            {/* button that will open the modal */}
            <MenuButton />
          </article>
        </section>
        <section className="flex place-content-center">
          <CategoriesBar page='home' categories={categories} />
        </section>
      </nav>
  )
}

export default MainNav
