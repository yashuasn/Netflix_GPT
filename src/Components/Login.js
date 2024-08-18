import React from 'react'
import Header from './Header'
import background from '../Images/background.png';
import { useState, useRef } from 'react';
import { checkValidData } from '../Utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../Utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch();
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const navigate = useNavigate();
    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message);

        if (message) return;

        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value
                    }).then(() => {
                        // dispatch()
                        navigate("/browse");

                    }).catch((e) => {
                        setErrorMessage(e.message);
                    })
                    console.log(user);

                })
                .catch((e) => {
                    const errorCode = e.code;
                    const errorMessage = e.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                    setErrorMessage(errorCode + " + " + errorMessage)
                })

        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " + " + errorMessage)
                });

        }

    }
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src={background} alt='background' />
            </div>
            <form onSubmit={(e) => { e.preventDefault() }} className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type='text' ref={name} placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />}
                <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
                <input type='password' ref={password} placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
                <p className='text-red-600 font-bold text-lg py-2'>{errorMessage}</p>
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netlix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login