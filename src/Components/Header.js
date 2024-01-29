import React from 'react'
import logo from "../constants/Netflix.png"
const Header = () => {
  return (
    <div className='  m-6 mt-0 pt-2'>
        <img  className='inline-block w-44' src={logo}/>
    </div>
  )
}

export default Header