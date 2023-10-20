import {
  createBrowserRouter,
  
} from "react-router-dom";
import Root from "../Root/Root";
import ErrorElement from "../Component/ErrorElement";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/addproduct/AddProduct";
import Login from "../pages/Login/Login";
import Regestraion from "../pages/Regestraion/Regestraion";
import Branddetails from "../Component/Branddetails";
import SingleDetails from "../Component/SingleDetails";
import Update from "../pages/Update";
import Cart from "../pages/Cart";
import PrivetRoute from "../PrivetRoute/PrivetRoute";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
  children:[
{
path:'/',
element: <Home></Home>,
loader: ()=> fetch('https://gadget-galaxy-pro-server-side-1sp6al515-ag-juwels-projects.vercel.app/products')

},
{
  path:'/addproduct',
  element: <PrivetRoute><AddProduct></AddProduct></PrivetRoute>
},
{
  path:'/login',
  element: <Login></Login> 
},
{
  path:'/regestraion',
  element: <Regestraion></Regestraion> 
},
{
  path: '/seedetails/:brandname',
  element: <Branddetails />,
}
,
{
path: '/singleDeteils/:id',
element:<PrivetRoute> <SingleDetails></SingleDetails></PrivetRoute>,
loader:({params})=> fetch(`https://gadget-galaxy-pro-server-side-1sp6al515-ag-juwels-projects.vercel.app/products/${params.id}`)
},
{
path: '/update/:id',
element:<PrivetRoute><Update></Update></PrivetRoute> ,
loader:({params})=> fetch(`https://gadget-galaxy-pro-server-side-1sp6al515-ag-juwels-projects.vercel.app/products/${params.id}`)
},
{
  path: '/addcart',
  element: <PrivetRoute><Cart></Cart></PrivetRoute>,
  loader: ()=> fetch('https://gadget-galaxy-pro-server-side-1sp6al515-ag-juwels-projects.vercel.app/cart')
},





  ]
  },
]);


export default router;