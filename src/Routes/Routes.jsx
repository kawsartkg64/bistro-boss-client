import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../LayOut/Root";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Home from "../Page/Home/Home";
import OurMenu from "../Page/OurMenu/OurMenu";
import ContactUs from "../Page/Contactus/ContactUs";
import DASHBOARD from "../Page/DASHBOARD/DASHBOARD";
import OurShop from "../Page/OurShop/OurShop";
import LogIn from "../Authentication/LogIn";
import SignUp from "../Authentication/SignUp";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/ourmenu",
          element:<OurMenu></OurMenu>
        },
        {
          path:'/contactus',
          element:<ContactUs></ContactUs>
        },
        {
          path:'/dashboard',
          element:<DASHBOARD></DASHBOARD>
        },
        {
          path:'ourshop',
          element:<OurShop></OurShop>
        },
        {
          path:'/login',
          element:<LogIn></LogIn>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);