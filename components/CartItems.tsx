"use client"
import { StateType, cartContext } from '@/context/cart.context'
import Image from 'next/image'
import React, { useContext } from 'react'
import ProductCount from './ProductCount'
import { furnitureType } from '@/common.types'
import { urlFor } from '@/db/sanity'

const CartItems = () => {
    const { state, dispatch } = useContext(cartContext)
    const cart: StateType =JSON.parse( localStorage.getItem('cart')!)??state;

    // console.log('state is', state);
  return (
    <section className='flex flex-col gap-4 py-4 border-y  border-y-border-dark'>  
        {cart.items.length>0 ? (
          
        
          cart.items.map((furniture:furnitureType) => (
            <article className='flex  w-full justify-between px-4 place-items-center' key={furniture.title}>
              <div className='flex  place-items-center gap-4  w-1/3'>
                <Image width={130} height={100} alt='item' src={urlFor(furniture.mainImage).url()} />
                <div className='flex  flex-col gap-2 max-w-full md:max-w-xs '>
                  <h1 className='text-head-sm text-primary-dark font-light'>{furniture.title}</h1>
                  {/* <p className='text-body-sm font-extralight'>{body}</p> */}
                  <p className='text-body-sm text-primary-dark'>{`${furniture.unit ? furniture.unit : '$'}${furniture.price}`}</p>
                  <div className="  md:hidden w-full max-w-md">
                <ProductCount element={furniture} inStock={99} key={furniture.title} />
              </div>
                </div>
              </div>
              <div className=" hidden md:flex place-content-center w-1/3 ">
                <ProductCount element={furniture} inStock={99} key={furniture.title} />
              </div>
              <p className='hidden md:block  w-1/3 text-end'>{furniture.price*furniture.quantity}</p>
            </article>
          ))) : (
            <div>No item in the cart</div>
          )
        }
    
      </section>
  )
}

export default CartItems
