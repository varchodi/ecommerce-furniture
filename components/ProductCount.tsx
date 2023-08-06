"use client"
import { furnitureType } from '@/common.types';
import { cartContext } from '@/context/cart.context';
import furniture from '@/sanity/schemas/furniture';
import { useState ,useContext} from 'react'

const ProductCount = ({ inStock, element }: { inStock: number, element: furnitureType }) => {
  const { state, dispatch } = useContext(cartContext);
  
  const item: furnitureType = element;
  return (
    <div className='flex gap-5 justify-between place-items-center bg-primary-white md:max-w-fit  max-h-8'>
          <button className='text-border-dark disabled:text-border-gray hover:bg-primary-dark px-3 py-1'
        onClick={() => dispatch({ type: "DECREMENT", payload: item })}
              disabled={item.quantity <= 1}
              type="button"
          >-</button>
          <p>{item.quantity}</p>
          <button
              className='text-border-dark disabled:text-border-gray hover:bg-primary-dark px-3 py-1'
              onClick={() => dispatch({ type: "INCREMENT", payload: item })}
              disabled={item.quantity >= inStock}
              type="button"
          >+</button>
    </div>
  )
}

export default ProductCount
5