import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () =>{
  const [signin ,setsignin] = useState(true);
  const toggleForm = () =>{
    setsignin(!signin);

  }
  return (
    <div>
    <Header/>
    <div className="absolute"><img alt="Banner" src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"/></div>
    <form className='absolute p-12 w-3/12 my-36 mx-auto left-0 right-0 bg-black text-white bg-opacity-80'>
    <h1 className='font-bold text-3xl py-4'>{signin ? "Sign In" : "Sign Up"}</h1>
      {!signin && <input type="text" className = "p-2 my-4 w-full bg-gray-700" placeholder='Full Name'/>}
      <input type="text" className = "p-2 my-4 w-full bg-gray-700" placeholder='Email or phone number'/>
      <input type="password" className = "p-2 my-4 w-full bg-gray-700" placeholder='Password'/>
      <button className = "p-4 my-6 bg-red-600 w-full rounded-lg">{signin ? "Sign In" : "Sign Up"}</button>
      <p className ="font-bold cursor-pointer" onClick ={toggleForm}>{signin ? "New to Netflix? Sign up now." : "Already A User ? Sign In Now"}</p>

    </form>
    </div>
  

  )
}

export default Login