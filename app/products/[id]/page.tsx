
import { FeatureType, furnitureType } from '@/common.types'
import MainFeature from '@/components/MainFeature'
import ProductAction from '@/components/ProductAction'
import ProductCard from '@/components/ProductCard'
import ProductCount from '@/components/ProductCount'
import SignUpBar from '@/components/SignUpBar'
import { Features, dummyDimensions } from '@/constants'
import { client, urlFor } from '@/db/sanity'
import { getFurniture, getMainPageFurnitures } from '@/db/queries'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'

const ProductDetails = async ({ params: { id } }: { params: { id: string } }) => {
  const furnitures = await client.fetch(getMainPageFurnitures);
  const furnitureItem = await client.fetch(getFurniture(id));
  const furniture: furnitureType = furnitureItem[0];
  const inStock = 99;
  return furniture!==undefined?(
    <div>
      {/* product details */}
      <section className='flex flex-col md:flex-row place-content-center md:p-4 gap-4 md:gap-10'>
        <article className='w-full md:w-1/3  flex h-fit'>
          <Image width={1500} height={1500} alt={id} className='w-full' src={urlFor(furniture.mainImage).url()} />
        </article>

        <article className='w-full md:w-1/3 px-6 flex flex-col justify-between gap-4'>
          <div className='text-primary-dark border-b border-border-dark mb-2 pb-1'>
            <h1 className='text-head-md '>{furniture.title}</h1>
            <p className='text-head-sm font-extralight'>{furniture.unit}{furniture.price}</p>
          </div> 
          
          <div className=' text-primary-dark'>
            <h1 className='text-body-sm text-primary-light'>Product description</h1>
            <div className='font-light mt-2'>
              <PortableText
                value={furniture.body}
              />
            </div>
          </div>

          {/* dimensions */}
          <div>
            <h1 className='text-head-xs text-primary-dark mb-3'>Dimensions</h1>
            <div className='font-light flex gap-2 justify-start'>

            {
              dummyDimensions.map(({ target, value },i) => (
                <div key={target} className={`${i<dummyDimensions.length-1?'border-r':''} border-r-border-dark px-2 sm:px-4 lg:px-10`}>
                  <p className='mb-3'>{target}</p>
                  <p>{value}</p>
                </div>
              ))
            }
            </div>
          </div>

          {/* action btns add to cart of favorites */}
          <ProductAction furniture={furniture} element={id} quantity={99} />
          
        </article>

      </section>
      {/* same products */}
      <section className='bg-primary-white flex flex-col place-items-center gap-5 p-6'>
        <h1 className='text-head-md font-light text-primary-dark capitalize'>You may also like</h1>
          <article className='grid grid-cols-2 md:grid-cols-4 gap-4 p-2 md:px-8'>
            {
              furnitures.map(({title,mainImage,_id,price,unit}:furnitureType) => (
                <ProductCard title={title} id={_id} image={urlFor(mainImage).url()} price={price} key={_id} />
              ))
            }
          </article>
          <article>
          <Link  href={'/'} className='text-primary-dark p-4 text-body-sm font-light shadow-sm rounded-md hover:bg-light-grey hover:shadow-md hover:text-primary-light delay-200 w-full text-center md:text-start md:w-fit'>
                  View collection
              </Link>
          </article>
        </section>
      {/* features */}
      <section className="flex flex-col place-content-center p-4 my-8">
          <h1 className='text-head-sm font-light text-primary-light text-center my-8 capitalize'>What makes our brand different</h1>
          <article className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center items-center place-items-center gap-8'>
            {
              Features.map((feature: FeatureType) => (
                <MainFeature key={feature.title} feature={feature} />
              ))
              }
          </article>
        </section>
      {/* product hero */}
      <section className='bg-primary-white flex flex-col md:flex-row text-primary-dark place-content-center'>
        <article>
          <Image alt='hero' width={800} height={600} src='/images/product-hero-image.png' />
        </article>
        <article className='flex flex-col justify-between p-10'>
          <div className='mb-4'>
            <h1 className='text-body-md capitalize '>Join the club and get the benefits</h1>
            <p className='font-extralight'>Sign up for our newsletter and receive exclusive offers on new ranges,<br /> sales, pop up stores and more</p>
          </div>
          <SignUpBar mode='light' />
        </article>
      </section>
    </div>
  ) : (
      <div>
        No product for id {id}
      </div>
  )
}

export default ProductDetails
