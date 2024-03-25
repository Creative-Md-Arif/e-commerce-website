// eslint-disable-next-line no-unused-vars
import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';



import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Cart from './pages/Cart';
import { productsData } from './api/Api';
import Product from './components/Product';
import Login from './pages/Login';


const Layout =()=>{
  return(
     <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
     </div>
  );
};


const router = createBrowserRouter([
 {
  path:"/",
  element :<Layout/>,
  children:[
    {
      path:"/",
      element:<Home/>,
      loader: productsData,
    },

    {
      path: "/product/:id",
      element:<Product/>

    },

    {
      path:"/cart",
      element:<Cart/>,
    },

    {
      path: "/login",
      element: <Login/>,
    },
    
  ],
 },

]);



const App = () => {
  return (
    <div className=' font-titleFont'>
     <RouterProvider router={router}/>
    </div>
  );
};

export default App;