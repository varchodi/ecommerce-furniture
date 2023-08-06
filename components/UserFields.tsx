'use client'
import { UserType } from '@/common.types'
import { userQuery } from '@/db/queries'
import { client } from '@/db/sanity'
import React,{useState} from 'react'
import Editbtn from './Editbtn'
import FieldInput from './FieldInput'
import { Type } from 'typescript'

const UserFields = ({ name, profile, email }: Partial<UserType>) => {
    const [isEditing, setIsEditing] = useState(false)
    const [user, setUser] = useState<Partial<UserType>>({ email, profile, name })
    
    function handleChange({f,g}:{g:string,f:string}) {
        switch (f) {
            case "name":
                setUser(usr=>({...usr,name:g}))
                break;
            case "email":
                setUser(usr => ({ ...usr, email: g }))
                break;
            case "profile":
                setUser(usr => ({ ...usr, profile: g }))
                break;
            default:
                break;
        }
    };
  return (
    <div className='flex justify-between px-3 py-6 border border-border-gray rounded-md'>
    <section>
              <h1 className='text-head-xs font-bold text-primary-dark'>Personal Information</h1> 
              <article className='grid md:grid-cols-2 gap-4 w-full'>
                  <FieldInput disabled={!isEditing} field='name' value={user.name!} label='Full Name' setValue={handleChange} />
                  
                  <FieldInput disabled={!isEditing} field='email' value={user.email!} label='Email' setValue={handleChange} />
                  
                  <FieldInput disabled={!isEditing} field='profile'  value={user.profile!} label='profile Image url' setValue={handleChange} />
              </article>
    </section>
      <Editbtn isEditing={isEditing} setEdit={()=>setIsEditing(prev=>!prev)} />
    </div>
  )
}

export default UserFields
