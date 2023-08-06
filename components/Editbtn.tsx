"use client"

const Editbtn = ({isEditing,setEdit}:{isEditing:boolean,setEdit:()=>void}) => {
  return (
      <div
          className="flex gap-3 p-4 cursor-pointer rounded-2xl border max-h-8 place-content-center place-items-center hover:bg-primary-transparent font-light text-body-sm max-w-fit"
          onClick={setEdit}>
          <p>{!isEditing?'Edit':'Changing ...'}</p>
          <p>{!isEditing ? '?' : ''}</p>
    </div>
  )
}

export default Editbtn
