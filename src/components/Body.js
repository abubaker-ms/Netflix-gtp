
import { BrowserRouter, createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";

import Login from './Login';
import Browse from './Browse';
import Header from './Header';
import { Provider } from 'react-redux';
import userStore from '../utils/userStore';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';

function LayoutComponent() {
 const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        const {uid,email,displayName,photoURL}=auth.currentUser;
        dispatch(addUser({uid,email,displayName,photoURL}));
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
      }
    });
  }
  , []);

  return (
    <div>
      <Header />
     
      <Outlet /> 
    </div>
  );
}


const router=createBrowserRouter([  
  
  {
    path:"/",
    element:<LayoutComponent />,
    children:[
    {
      path:"/",
      element:<Login />,
    },
    {
      path:'/login',
      element:<Login />
    },
    {
      path:'/browse',
      element:<Browse />
    }
   ] 
  }

])




function Body() {

  return (
    <Provider store={userStore}>
       <RouterProvider router={router}/>
    </Provider>
  )


}

export default Body