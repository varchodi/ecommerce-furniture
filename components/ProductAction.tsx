"use client"
import { furnitureType } from '@/common.types';
import { cartContext } from '@/context/cart.context';
import {useState,useContext} from 'react'
const ProductAction = ({ quantity, element,furniture }: {
    quantity:number,element:any,furniture:furnitureType
}) => {
  const [count, setCount] = useState(1);
  const { state, dispatch } = useContext(cartContext);
  const inStock = 9;
  return (
    <>
      <div className='flex gap-5 justify-between place-items-center  bg-primary-white md:max-w-fit  max-h-8'>
          <button className='text-border-dark disabled:text-border-gray hover:bg-primary-dark px-3 py-1'
              onClick={() => setCount(p=>--p)}
              disabled={count <= 1}
              type="button"
          >-</button>
          <p>{count}</p>
          <button
              className='text-border-dark disabled:text-border-gray hover:bg-primary-dark px-3 py-1'
              onClick={() => setCount(p=>++p)}
              disabled={count >= inStock}
              type="button"
          >+</button>
    </div>
    <div className='font-extralight flex flex-col-reverse md:flex-row gap-4'>
            <button
          onClick={() => {
            dispatch({ type: "ADD", payload: { ...furniture, quantity: count } });
            console.log(`state ${String(state.items)}`)
              }}
              className='bg-primary-dark text-primary-white px-6 py-3 w-full hover:bg-primary-light hover:text-primary-white hover:shadow-sm'
          type="button"
          
            >Add to Cart</button>
            
            <button
              onClick={() => console.log('added to favs')}
              className='text-primary-dark px-6 py-3 w-full bg-primary-white hover:bg-primary-light hover:text-primary-white hover:shadow-xl'
              type="button"
            >Save to favorites</button>
    </div>
    </>
  )
}

export default ProductAction
