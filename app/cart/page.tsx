import CartItems from '@/components/CartItems'
import Checkout from '@/components/Checkout'
import React from 'react'

const CartPage = async () => {
 
  return (
    <div className='p-4'>
      <h1 className='text-head-sm md:text-head-xl text-primary-dark font-extralight py-4 md:py-8'>Your shopping cart</h1>
      {/* cart table */}
      <CartItems/>
      <Checkout />
    </div>
  )
}

export default CartPage
