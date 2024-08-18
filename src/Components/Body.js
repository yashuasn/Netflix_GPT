import React, { useEffect } from 'react'
import Browse from './Browse';
import Login from './Login';
import { createBrowserRouter, useNavigate } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';
import { removeUser } from '../Utils/userSlice';


const Body = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ]);


    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
};

export default Body