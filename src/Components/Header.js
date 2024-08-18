import { React, useEffect } from 'react'
import logo from '../Images/logo.png'
import user from '../Images/user-icon.jpg'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../Utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../Utils/userSlice';
import { removeUser } from '../Utils/userSlice'


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => { })
      .catch((e) => {
        navigate("/error")
      })
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      }
      else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    }
  }, [])
  return (
    <div className='absolute w-screen px-8 px-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src={logo} alt='header' />
      {user && <div className='flex p-2'>
        <img className='w-12 h-12' src="https://media.licdn.com/dms/image/v2/D5603AQHTZIG56YEKsA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705866679470?e=1729728000&v=beta&t=pw2OqQyy_0UE-UXDIw0rPiAE-GAVBJNUV7BB6VF94x8" alt='icon' />
        <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header