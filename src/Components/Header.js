import React from 'react'
import logo from '../Images/logo.png'

const Header = () => {
  return (
    <div className='absolute px-8 px-2 bg-gradient-to-b from-black z-10'>
        <img className='w-44' src={logo} alt='header'/>
    </div>
  )
}

export default Header