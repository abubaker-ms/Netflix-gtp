import './App.css';

import { BrowserRouter, createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Login from './components/Login';
import Browse from './components/Browse';
import Header from './components/Header';

function LayoutComponent() {
  return (
    <div>
      <Header />
     
      <Outlet /> 
    </div>
  );
}


const router=createBrowserRouter([  
  {
    path:'/',
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
      path:'/browser',
      element:<Browse />
    }
   ] 
  }

])

function App() {
  return <RouterProvider router={router}/>
}

export default App