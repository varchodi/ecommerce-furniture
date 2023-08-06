import Image from "next/image"
import Link from "next/link"

type Props = {
    image: string,
    title: string,
  price: string|number,
  id:string,
}

const ProductCard = ({image,title,price,id}:Props) => {
  return (
    <Link href={`/products/${id}`} className=" text-primary-dark p-2 flex flex-col rounded-md  hover:shadow-md h-fit">
      <Image width={1500} height={1500} alt={title} src={image} className="w-full  border-light-grey rounded-sm"/>
      
      <h1 className="font-light md:text-body-sm  lg:text-head-sm">{title}</h1>
      <p className=" font-light md:text-body-sm lg:text-body-md">$ {price}</p>
    </Link>
  )
}

export default ProductCard
