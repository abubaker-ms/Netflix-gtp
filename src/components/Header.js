import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice'; 
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleSignButton = () => {
    if(user){
      signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/login")
        dispatch(removeUser());
    }).catch((error) => { 
      // An error happened.
    });
    }
    else
    {
      navigate("/login")
    }
  
  }

  const user = useSelector((state) => state.user.user)
  return (
    <div className='flex justify-between  absolute z-10 w-full bg-black bg-opacity-80 text-white'>
      <div className='right-10'>
      <img className="" src="https://i1.wp.com/www.whatphone.net/wp-content/uploads/2019/05/Netflix-Logo.png?fit=2950%2C1554&ssl=1" height="150px" width="150px"/>
      </div>

      <div className='m-3 flex py-2 '>
        {
          user ?
          <img className='h-8' src={`${user.photoURL}`} alt="user" />
          :
          ""
        }
        {user && <h1 className='font-bold px-6 my-2 text-center text-white'>{user.displayName}</h1>}
        {<button className="px-4 py-2 font-bold text-white bg-red-600 rounded top-10 hover:bg-red-600" onClick={handleSignButton}>{user?"SignOut":"SignIn"}</button>}


      </div>
    </div>
  )
}

export default Header