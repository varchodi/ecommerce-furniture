import React from 'react'

const SignUpBar = ({mode}:{mode:'dark'|'light'}) => {
  return (
    <article className={`flex flex-row ${mode==='dark'?'flex-row-reverse':'flex-row'} place-content-start`}>
          <input
              type="email"
              name="mail"
              id="mail"
        placeholder='green@mail.com'
        className={`w-full py-3 px-4 outline-none ${mode==='light'?'placeholder:text-border-gray text-primary-dark':'placeholder:text-light-grey bg-primary-transparent  text-light-grey'}`}
          />
      <button
        className={`px-6 py-3 font-light ${mode==='light'?'bg-primary-dark text-light-grey':'bg-primary-white  text-primary-dark'} hover:shadow-lg hover:underline shadow-light-grey`}
        type="button">SignUp</button>
    </article>
  )
}

export default SignUpBar
