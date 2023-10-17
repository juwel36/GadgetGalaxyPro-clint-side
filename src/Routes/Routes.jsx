import {
  createBrowserRouter,
  
} from "react-router-dom";
import Root from "../Root/Root";
import ErrorElement from "../Component/ErrorElement";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/addproduct/AddProduct";
import Login from "../pages/Login/Login";
import Regestraion from "../pages/Regestraion/Regestraion";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
  children:[
{
path:'/',
element: <Home></Home>
},
{
  path:'/addproduct',
  element: <AddProduct></AddProduct>
},
{
  path:'/login',
  element: <Login></Login> 
},
{
  path:'/regestraion',
  element: <Regestraion></Regestraion> 
},




  ]
  },
]);


export default router;