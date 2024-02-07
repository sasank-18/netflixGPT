import React, { useRef, useState } from 'react'
import Header from './Header'
import userValidation from '../utils/userValidation'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../reduxStore/signUp';


const Login = () => {
     const[isSignInForm, setIsSignInForm] = useState(true)
     const [errHandling, setErrHandling] = useState()
     const dispatch = useDispatch();
     const email= useRef(null);
     const password= useRef(null);
      const name = useRef(null);
    
      const TogglesignInSignUp = ()=>{
         setIsSignInForm(!isSignInForm);
      }
       const buttonClick = (e)=>{
       const arr= userValidation(email.current.value,password.current.value);
       setErrHandling(arr)
      
         if(arr) return ;

         //sign up
         if(!isSignInForm){
         createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
          .then((userCredential) => {
         // Signed up 
         const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
              }).then(() => {
                const {uid,email, displayName, photoURL} = auth.currentUser;
                dispatch(addUser({uid:uid,email:email, displayName:displayName, photoURL:photoURL}))
                
              }).catch((error) => {
             });


              })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrHandling(errorCode + " " + errorMessage)
          });
         }
         else{
          signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrHandling(errorCode + " " + errorMessage)
            });
          
         }
       }
           

  return (
    <div className=''>
    <div className='w-full h-[5rem] absolute bg-gradient-to-b from-black'></div>
    <Header />
   <div className=' w-[100vw] h-[100vh]'>
    <img className='w-[100%] h-[100%]' src='https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_large.jpg'/>
   </div>
    
    <div className='absolute rounded-md top-0 bottom-0 right-0 left-0 h-[30rem] w-96 m-auto text-white bg-black  bg-opacity-75 
    '>
        <form onSubmit={(e)=>{e.preventDefault()}} className='p-10'>
            <h1 className='text-4xl font-bold mb-5'>
            {isSignInForm ? "Sign In" : 'Sign Up'}
            </h1>

            { !isSignInForm &&
            <div className='mb-3 bg-slate-700 bg-opacity-60 rounded-sm'>
            <input  ref={name} placeholder='Name' className='p-3 Email w-full p-1 border-none text-white  bg-transparent  outline-0  focus:bg-transparent hover:bg-transparent autofill-bg-transparent' type='text'/>
            </div>}
            

            <div className=' mb-3 bg-slate-700 bg-opacity-60 rounded-sm'>
            <input   ref={email}  placeholder='Email' className='p-3 Email w-full p-1 border-none text-white  bg-transparent  outline-0  focus:bg-transparent hover:bg-transparent autofill-bg-transparent' type='email'/>
            </div>
                    
            <div className=' mb-3 bg-slate-700 bg-opacity-60 rounded-sm'>
            <input  ref={password} placeholder='Password' className='w-full p-3 text-white bg-transparent outline-0 ' type='password'/>
            </div>
          
            <div className='text-red-500 mb-2'>{errHandling}</div>
        

            <button onClick={buttonClick} className='p-2 rounded-sm  text-center w-full bg-red-600 text-lg mb-4'>
            {isSignInForm ? "Sign In" : 'Sign Up'}
            </button>

            <span onClick={TogglesignInSignUp} className='font-semibold cursor-pointer'>
            <span className='text-slate-400'>
           {isSignInForm? "New to Netflix?" : "Already Have an Account?"}
            </span>{isSignInForm?" Sign up now.":" Sign In"}</span>
        </form>
    </div>
    

   </div>
   
  )
}

export default Login;
