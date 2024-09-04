
import { BrowserRouter, createBrowserRouter,Navigate,Outlet,RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";

import Login from './Login';
import Browse from './Browse';
import Header from './Header';
import { Provider } from 'react-redux';
import userStore from '../utils/userStore';
import GptSearch from './GptSearch';

function LayoutComponent() { 

  return (
    <div className=''>
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
    },
    {
      path:'/gptSearch',
      element:<GptSearch />
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