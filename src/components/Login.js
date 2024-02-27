import React from 'react'
import Header from './Header'
import { useState } from 'react'
import { useRef } from 'react'
import { validate } from '../utils/validate'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from 'firebase/auth' 
import { useDispatch } from 'react-redux'
import { addUser, } from "../utils/userSlice"
import { banner } from '../utils/constants'


const Login = () =>{
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [signin ,setsignin] = useState(true);
  const [error,seterror] = useState(null);
  const toggleForm = () =>{
    setsignin(!signin);

  }
 

  const handleValid =() =>{
    const message = validate(email.current.value,password.current.value);
    seterror(message);
    if(message) return;
    if(!signin){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
     .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {
        const {uid,email,displayName,photoURL,} = auth.currentUser;
      dispatch(addUser({uid : uid,email : email,displayName : displayName ,photoURL: photoURL }));
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
     

   

    // ...
  })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterror(errorCode+errorMessage);
    // ..
  });
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;



    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterror(errorCode+errorMessage);
  });


    }

  }


  return (
    <div>
    <Header/>
    <div className="absolute"><img alt="Banner" src= {banner}/></div>
    <form onSubmit ={(e) => e.preventDefault()}className='absolute p-12 w-3/12 md:w-3/12 my-36 mx-auto left-0 right-0 bg-black text-white bg-opacity-80'>
    <h1 className='font-bold text-3xl py-4'>{signin ? "Sign In" : "Sign Up"}</h1>
      {!signin && <input ref ={name} type="text" className = "p-2 my-4 w-full bg-gray-700" placeholder='Full Name'/>}
      <input ref ={email} type="text" className = "p-2 my-4 w-full bg-gray-700" placeholder='Email or phone number'/>
      <input ref = {password} type="password" className = "p-2 my-4 w-full bg-gray-700" placeholder='Password'/>
      <button onClick ={handleValid}className = "p-4 my-6 bg-red-600 w-full rounded-lg">{signin ? "Sign In" : "Sign Up"}</button>
      <p className='text-red-500 font-bold py-2'>{error}</p>
      <p className ="font-bold cursor-pointer" onClick ={toggleForm}>{signin ? "New to Netflix? Sign up now." : "Already A User ? Sign In Now"}</p>

    </form>
    </div>
  

  )
}

export default Login