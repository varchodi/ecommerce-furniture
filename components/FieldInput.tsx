import React,{useState} from 'react'

const FieldInput = ({ label, value,field, setValue,disabled }: {
    label: string,
    value: string | number,
    field: string,
    disabled:boolean,
    setValue:({f,g}:{f:string,g:string})=>void
}) => {
  return (
    <div className='py-2 px-4'>
          <h1 className='text-primary-light mb-0 font-extralight'>{label}</h1>
          <input
              className='border-none text-primary-dark outline-primary-dark border-b-primary-dark disabled:outline-none w-max'
              disabled={disabled} type="text" name="" id="" value={value} onChange={(e) => setValue({ f: field, g: e.target.value })} />
    </div>
  )
}

export default FieldInput
