"use client"
import { FooterLinks } from "@/constants"
import { useRouter } from "next/navigation"

const Filter = ({ type, elements }: {
    type: string,
    elements:string[]
}) => {
    const router = useRouter();
    return (
      <div className="flex gap-1 place-items-center place-content-center">
            <h1>{type} : </h1>
        <select onChange={(e)=>router.push(`/search?${type}=${e.target.value}`)}  className='border-none outline-none px-1 py-2 bg-light-grey hover:shadow-md ' name="category" id="category">
            
            
                    {
                    elements.map((el:string) => (
                        <option onClick={()=>console.log('hey')}   key={el}>{el}</option>
                    ))
                    }
        </select>
      </div>
  )
}

export default Filter
