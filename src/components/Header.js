import React from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {  useDispatch ,useSelector} from 'react-redux';
import { removeUser } from '../utils/userSlice';

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
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
    <img alt="g" className ="w-44"src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
    <button onClick={handleSignout}>(Sign out)</button>
    <img alt ="icon" src = {user?.photoURL}/>
    </div>
  )
}

export default Header