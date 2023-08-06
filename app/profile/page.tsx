import Addressfield from '@/components/AddressField';
import UserFields from '@/components/UserFields';
import Userpreview from '@/components/Userpreview';
import { userQuery } from '@/db/queries';
import { client } from '@/db/sanity';
import { getCurrentUser } from '@/lib/sessions'
import { redirect } from 'next/navigation';
import React from 'react'

const page = async () => {
    const session = await getCurrentUser();
  const [user] = await client.fetch(userQuery(session?.user?.email!))
  console.log('user is', user);
    if (!session?.user) redirect('/signin');
  return (
    <main className='bg-light-grey w-full md:w-8/12'>
      <section className='mb-10 text-head-lg font-bold text-primary-dark'>
        <h1 >My profile</h1>
      </section>
      <section className='flex flex-col gap-4 my-6'>
        {/* user preview */}
        <Userpreview {...user} />
        <UserFields {...user} />
        <Addressfield {...user} />
      </section>
    </main>
  )
}

export default page
