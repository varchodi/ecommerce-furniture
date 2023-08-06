import Image from "next/image"
import SignUpBar from "./SignUpBar"

const TopFooter = () => {
  return (
    <section className='flex place-items-start sm:place-items-center flex-col bg-hero-pattern bg-center bg-cover bg-no-repeat text-primary-white p-4 md:py-10'>
          <h1 className="text-head-md font-light py-6">Join the club and get the beneficts</h1>
          <p className="text-start text-body-sm md:text-body-md md:text-center py-3 font-extralight">Sign up for our newsletter and receive exclusive offers on <br />new ranges, sales, pop up stores and more</p>
          <ul className="flex flex-col md:flex-row place-content-start md:place-content-center gap-3 pb-6 ">
              {
                  ['Exclusive offers', 'Free events', 'Large discounts'].map((ficts) => (
                      <li key={ficts} className="flex place-content-start md:place-content-center gap-1">
                          <Image className="" width={20} height={20} src='/icons/white-sticked.svg' alt="ficts" />
                          <p className="font-extralight">{ficts}</p>
                      </li>
                  ))
              }
          </ul>
          <article className="pb-8">
              <SignUpBar mode="light" />
          </article>
        
    </section>
  )
}

export default TopFooter
