import React from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {  useDispatch ,useSelector} from 'react-redux';
import { addUser,removeUser } from "../utils/userSlice"
import {onAuthStateChanged} from 'firebase/auth' ;
import {useEffect } from 'react'
import { logo ,avatar } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';


const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)
  const navigate = useNavigate();
  const handleSignout = () =>{
   signOut(auth).then(() => {
    dispatch(removeUser())
    navigate("/")

  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
  }
  useEffect(() => {onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,email,displayName,photoURL,} = user;
      dispatch(addUser({uid : uid,email : email,displayName : displayName ,photoURL: photoURL }));
      navigate("/browse");
      
      // ...
    } else {
      dispatch(removeUser());
      navigate("/");

      // User is signed out
      // ...
    }
  });},[]
    
  );

  const togglegptsearch = () =>{
    dispatch( toggleGptSearchView());
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex md:flex-row justify-between">
    <img alt="g" className ="w-44 md:mx-0" src= {logo}/>
    <div className='flex '>
    <button className ="bg-purple-700 p-2 rounded-lg h-10 mx-2 text-white" onClick = {togglegptsearch}>GPT Search</button>
    <img className ="w-10 h-10 md:block"alt ="user" src = {avatar}/>
    <button className ="mt-[-46px] p-3 text-white"onClick={handleSignout}>(Sign out)</button>
    </div>
    
    </div>
  )
}

export default Header