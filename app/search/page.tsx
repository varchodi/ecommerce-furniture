import { furnitureType } from '@/common.types';
import ProductCard from '@/components/ProductCard';
import { client, urlFor } from '@/db/sanity';
import { getMainPageFurnitures } from '@/db/queries';
import React from 'react'

const SearchPage = async() => {
  const furnitures = await client.fetch(getMainPageFurnitures);
  return (
    <section className='flex flex-col place-items-center gap-5 py-4 mt-4'>
          <article className='grid grid-cols-2 md:grid-cols-4 gap-4 p-2 md:px-8'>
          {
              furnitures.map(({title,mainImage,_id,price,unit}:furnitureType) => (
                <ProductCard title={title} id={_id} image={urlFor(mainImage).url()} price={price} key={_id} />
              ))
        }
        {
              furnitures.map(({title,mainImage,_id,price,unit}:furnitureType) => (
                <ProductCard title={title} id={_id} image={urlFor(mainImage).url()} price={price} key={_id} />
              ))
            }
          </article>
  </section>
  )
}

export default SearchPage
