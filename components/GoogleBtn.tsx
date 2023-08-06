"use client"
import { signIn,getProviders } from 'next-auth/react'
import { useEffect, useState } from 'react';
type Provider = {
    id: string;
    name: string;
    type: string;
    signInUrl: string;
    callbackUrl: string;
    signinUrlparams: Record<string, string> | null;
  }
  
type Providers = Record<string, Provider>;
  
const GoogleBtn = () => {
    //look for avalaible providers
    const [providers, setProviders] = useState<Providers|null >(null)
    useEffect(() => {
        const fetchProviders = async () => {
          const res = await getProviders();
          //console.log("prov",res);
          setProviders(res);
        }
        fetchProviders();
    }, [])
if (providers) {
    

    return (
      <div>
            {Object.values(providers).map((prov, i) => (
                <div
                    key={i}
                    onClick={()=>signIn(prov.id)}
                    className='flex gap-3 items-center border border-primary-dark w-fit px-4 py-3 hover:bg-primary-dark hover:text-primary-white cursor-pointer'>
                    <p className='text-body-md font-bold'>G</p>
                    <p className='text-body-sm font-extralight '>continue with google</p>
                </div>
        ))} 
        
      </div>
        )
} else {
    return (
        <div
            onClick={()=>alert("no provider")}
            className='flex gap-3 items-center border border-primary-dark w-fit px-4 py-3 hover:bg-primary-dark hover:text-primary-white cursor-pointer'>
            <p className='text-body-md font-bold'>?</p>
            <p className='text-body-sm font-extralight '>No provider</p>
        </div>
    )
    }
}

export default GoogleBtn
