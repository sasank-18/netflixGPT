import React, { useState } from 'react'
import logo from "../constants/Netflix.png"
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addUser } from '../reduxStore/signUp';


const Header = () => {
 const navigate= useNavigate()
 const user = useSelector((store)=>store.UserAuthDAta)
 const [profileToggle, setProfileToggle] = useState(false);


 console.log('dfs',user);

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

  return (
    <div className=' px-5  flex  justify-between'>
        <div>
        {user?
        <img  className='w-36' src={logo}/>
        :<img  className='w-44' src={logo}/>}
        </div>  

          {user ?          
          <span className='flex mr-2 cursor-pointer flex-col justify-center text-center font-bold text-lg'>
          <h1 onClick={handleprofile} className='text-2xl bg-slate-300 p-1 px-2 rounded-md'>{user.displayName} ↓</h1>
           {profileToggle? 
          <div className='bg-black p-2 flex flex-col text-red-600 absolute top-14 right-[28px] rounded-md'>
          <button  onClick={handleClick} >SignOut</button>
          </div>
           : null}
          </span>
          :  
          <span onClick={handleClick} className='flex  cursor-pointer flex-col justify-center text-center font-bold text-lg'>SignIn</span>
          }
        
    </div>
  )
}

export default Header