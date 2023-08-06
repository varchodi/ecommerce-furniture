import { FeatureType } from '@/common.types'
import Image from 'next/image'
import React from 'react'

const MainFeature = ({ feature }:{feature:FeatureType}) => {
  return (
    <article className=' p-4 text-primary-dark hover:shadow-xl shadow-border-dark rounded-md max-w-fit cursor-pointer'>
          <Image
              src={feature.icon}
              alt='feature'
              width={20}
              height={20}
          />
          <h1 className='my-4 text-body-md font-light'>{feature.title}</h1>
          <p className='font-extralight'>{feature.description}</p>
    </article>
  )
}

export default MainFeature
