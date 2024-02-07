import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from "../constants/Netflix.png";
import { addUser, removeUser } from '../reduxStore/signUp';
import { auth } from '../utils/firebase';
import { toggleGptSearchBar } from '../reduxStore/gptSlice';
import { supported_language } from '../constants/language';
import { languageChange } from '../reduxStore/languageSlice';

const Header = () => {
 const navigate= useNavigate()
 const dispatch = useDispatch();
 const user = useSelector((store)=>store.UserAuthDAta)
 const toggleResult = useSelector((state)=> state.gptSearch.toggleGptSearch)

 const [profileToggle, setProfileToggle] = useState(false);

useEffect(()=>{

  const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
      // user is signedIn and signedUp
      const {uid,email, displayName, photoURL} = user;
      dispatch(addUser({uid:uid,email:email, displayName:displayName, photoURL:photoURL}))
      navigate('/browse');
      } else {
        // User is signed out
      dispatch(removeUser());
        navigate('/');
      }  
  });
  //unsubcribe when component unmounts
  return ()=>{
    unsubscribe();
  }
},[])


const handleClick= ()=>{
  signOut(auth).then(() => {
      navigate('/')
  }).catch((error) => {
    // An error happened.
  });
}

const handleprofile = () => {
    setProfileToggle(!profileToggle);
}
 
const handleGptSearch = ()=>{
  dispatch(toggleGptSearchBar())
}

const handleLangChange = (e)=>{
     dispatch(languageChange(e.target.value));
}

  return (
    <div className='absolute  z-[70]    bg-gradient-to-b from-black  '>
    <div  
    className= {toggleResult ?'fixed bg-black flex w-full px-8 justify-between':'fixed flex w-full px-8 justify-between'}
    >
      <div >
        {user?
        <img  className='w-40' src={logo}/>
        :<img  className='w-44' src={logo}/>}
      </div>  
      
      <div className='flex '>
      
      {toggleResult&&
        <select className='text-white mx-0 px-[2px] outline-none font-bold rounded-md  m-[13.2px] bg-red-600 bg-opacity-60 border' 
        onChange={handleLangChange}>
          {supported_language.map((lang)=>
            <option className='bg-black ' key = {lang.Identifier} value={lang.Identifier}>{lang.language}</option>
          )}
        </select>
      }
      <div className='flex '>
        <button onClick={handleGptSearch} className='text-white font-bold rounded-md  m-[13.2px] px-2 bg-green-700 bg-opacity-60 border' >

      {toggleResult ? 'HomePage' : 'GptSearch'}
        </button>
      </div>
          {user ?          
          <span className='flex mr-2 cursor-pointer flex-col justify-center text-center font-bold text-lg'>
          <h1 onClick={handleprofile} className=' bg-red-600 cursor-pointer text-white bg-opacity-60 border py-[5.4px] px-3 rounded-md'>{user.displayName}↓</h1>
           {profileToggle? 
          <div className='bg-black  p-3 flex cursor-pointer flex-col  absolute top-[66px] right-[40px] rounded-md border'>
          <button className='text-red-600 '  onClick={handleClick} >SignOut</button>
          </div>
           : null}
          </span>
          :  null   
       }
      </div>
       </div>
    </div>
  )
}

export default Header