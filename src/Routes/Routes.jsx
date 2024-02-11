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
import Cart from "../Page/DASHBOARD/Cart/Cart";
import AllUser from "../Page/DASHBOARD/Alluser/AllUser";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "../PrivateRoute/AdminRoute/AdminRoute";
import AddItem from "../Page/DASHBOARD/AddItem/AddItem";
import ManageItem from "../Page/DASHBOARD/ManageItem/ManageItem";
import UpdateItem from "../Page/DASHBOARD/UpdateItem/UpdateItem";
import Payment from "../Page/DASHBOARD/Payment/Payment";


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
    {
      path:'dashboard',
      element:<DASHBOARD></DASHBOARD>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>
        },
        {
          path:"payment",
          element:<Payment></Payment>,
        },
        {
          path:'alluser',
          element:<AdminRoute><AllUser></AllUser></AdminRoute>,
        },
        {
          path:'additem',
          element: <AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path:'manageitem',
          element: <ManageItem></ManageItem>
        },
        {
          path:'updateitem/:id',
          element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader:({params}) =>  fetch(`http://localhost:5000/menu/${params.id}`)
        }
      ]
    }
  ]);