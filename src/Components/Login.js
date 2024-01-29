import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

     const[isSignInForm, setIsSignInForm] = useState(true)

      const TogglesignInSignUp = ()=>{
         setIsSignInForm(!isSignInForm);
      }

  return (
    <div className='relative'>
    <div className='w-full h-[5rem] absolute bg-gradient-to-b from-black'></div>
    <div className='absolute'>
    <Header />
    </div>
   <div className=' w-[100vw] h-[100vh]'>
    <img className='w-[100%] h-[100%]' src='https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_large.jpg'/>
   </div>
    
    <div className='absolute rounded-md top-0 bottom-0 right-0 left-0 h-[30rem] w-96 m-auto text-white bg-black  bg-opacity-75 
    '>
        <form className='p-10'>
            <h1 className='text-4xl font-bold mb-5'>
            {isSignInForm ? "Sign In" : 'Sign Up'}
            </h1>

            { !isSignInForm &&
            <div className='px-3 py-1 mb-3 bg-slate-700 bg-opacity-60 rounded-sm'>
            <label className='text-sm text-gray-300 '>Name</label> <br/>
            <input className='Email w-full p-1 border-none text-white  bg-transparent  outline-0  focus:bg-transparent hover:bg-transparent autofill-bg-transparent' type='text'/>
            </div>}


            <div className='px-3 py-1 mb-3 bg-slate-700 bg-opacity-60 rounded-sm'>
            <label className='text-sm text-gray-300 '>Email</label> <br/>
            <input className='Email w-full p-1 border-none text-white  bg-transparent  outline-0  focus:bg-transparent hover:bg-transparent autofill-bg-transparent' type='email'/>
            </div>

          
            <div className='px-3 py-1 mb-5 bg-slate-700 bg-opacity-60 rounded-sm'>
            <label className='text-sm text-gray-300'>Password</label> <br/>
            <input className='w-full p-1 text-white bg-transparent outline-0 ' type='password'/>
            </div>
            
            <button className='p-2 rounded-sm  text-center w-full bg-red-600 text-lg mb-4'>
            {isSignInForm ? "Sign In" : 'Sign Up'}
            </button>

            <span onClick={TogglesignInSignUp}  className='font-semibold cursor-pointer'>
            <span className='text-slate-400'>
           {isSignInForm? "New to Netflix?" : "Already Have an Account?"}
            </span>{isSignInForm?" Sign up now.":" Sign In"}</span>
        </form>
    </div>
    

   </div>
   
  )
}

export default Login