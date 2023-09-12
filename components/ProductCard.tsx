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
    <Link
      href={`/products/${id}`}
      className="group text-primary-dark pb-4 flex self-auto flex-col h-full rounded-md border-solid border hover:shadow-md h-fit transition-transform transform overflow-hidden">
      <div className="h-80 overflow-hidden">
        <Image
          width={1500}
          height={1500}
          alt={title}
          src={image}
          className="w-full h-full object-cover object-center border-light-grey rounded-sm transform scale-100 group-hover:scale-105 transition-transform"
        />
      </div>

      <h1 className="font-medium md:text-body-sm  sm:text-head-sm pt-2 pb-1 pl-2 pr-2 leading-7">
        {title}
      </h1>
      <p className=" font-light pl-2 pr-2">${price}</p>
    </Link>
  )
}

export default ProductCard
