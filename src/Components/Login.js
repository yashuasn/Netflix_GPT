import React from 'react'
import Header from './Header'
import background from '../Images/background.png';

const Login = () => {
  return (
    <div>
        <Header />
        <div className='absolute'>
        <img src={background} alt='background'/>
        </div>
        <form className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75'>
        <h1 className='font-bold text-3xl py-4'>Sign In</h1>
            <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
            <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>Sign In</button>
        </form>
    </div>
  )
}

export default Login