import { sign } from "crypto"
import SignUpBar from "./SignUpBar"

type Props = {
    title: string,
    description: string,
    position: 'start' | 'end',
    action: string,
    changeBackground?: boolean,
    sign?:boolean
}

const AboutHeroText = ({title,description,position,action,changeBackground,sign}:Props) => {
  return (
      <article className={`${changeBackground ? 'bg-primary-dark text-primary-white' : 'bg-primary-white text-primary-dark'} w-full p-10 px-12 flex flex-col gap-y-44`}>
          
          <div >    
              <h1 className='text-head-md font-light py-8 capitalize'>{title}</h1>
              <p className='text-body-sm font-extralight'>{description}</p>
          </div>
          {
              sign ? (
                  <SignUpBar  mode="light"/>
              ) : (
                      
            <div className={`flex place-content-center ${position==='start'?'md:place-content-start':'place-content-end'}`}>  
                <button
                    className={`${changeBackground ? 'bg-primary-transparent text-light-grey' : 'text-primary-dark bg-primary-white'} px-8 py-4 cursor-pointer hover:shadow-md shadow-light-grey w-full md:max-w-fit`}>{action}</button>
            </div>
              )
          }
    </article>
  )
}

export default AboutHeroText
