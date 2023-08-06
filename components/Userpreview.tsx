"use client"
import { UserType } from '@/common.types'
import Image from 'next/image'
import React, { useState } from 'react'
import Editbtn from './Editbtn'

const Userpreview = ({ name, profile, _createdAt }: Partial<UserType>) => {
    const [isEditing, setIsEditing] = useState(false);
  return (
    <section className='flex justify-between px-3 py-6 border border-border-gray rounded-md'>
          <article className='flex gap-4 place-items-center'>
              <Image
                  className='rounded-full'
                  src={profile ?? ""} width={100} height={50} alt='profile' />
              <div>
                  <h1 className='text-body-md font-bold text-primary-dark'>{name}</h1>
                  <p className='text-primary-transparent font-light'>Kampala Uganda,</p>
                  <p
                      className=' text-primary-transparent font-light'
                  >since: {new Date(_createdAt ?? "").toUTCString()}</p>

              </div>
          </article>
          <Editbtn isEditing={isEditing} setEdit={()=>setIsEditing(prev=>!prev)} />
    </section>
  )
}

export default Userpreview
