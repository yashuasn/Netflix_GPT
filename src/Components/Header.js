import React from 'react'
import logo from '../Images/logo.png'
import user from '../Images/user-icon.jpg'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../Utils/firebase';
import { useSelector } from 'react-redux'

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        navigate("/error")
      })
  }
  return (
    <div className='absolute w-screen px-8 px-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src={logo} alt='header' />
      {user && <div className='flex p-2'>
        <img className='w-12 h-12' src={user} alt='icon' />
        <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header