"use client"
import { StateType, cartContext } from '@/context/cart.context'
import Link from 'next/link'
import React,{useContext} from 'react'

const Checkout = () => {
    const { state, dispatch } = useContext(cartContext);
    // const cart: StateType =JSON.parse( localStorage.getItem('cart')!)??state;
    const cart: StateType =state;
  return (
    <section className='flex flex-col mt-4 place-items-end'>
        <article className='flex gap-2 place-items-center'>
          <h1 className='text-body-lg text-primary-light font-light'>Subtotal </h1> 
              <p className='text-head-sm text-primary-dark font-bold'>$ {state.total}</p>
        </article>
        <article className='text-primary-light font-extralight pt-4'>
          Taxes and shipping are calculated at checkout
        </article>
        <article className='w-full flex place-content-center md:place-content-end py-2'>
          <Link className='bg-primary-dark hover:bg-primary-white hover:text-primary-dark w-full md:w-fit text-primary-white text-head-xs font-extralight text-center px-4 py-2' href='/checkout' >Go to checkout</Link>
        </article>
      </section>
  )
}

export default Checkout
