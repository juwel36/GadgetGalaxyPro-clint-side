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



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
  children:[
{
path:'/',
element: <Home></Home>,
loader: ()=> fetch('http://localhost:5000/products')
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
{
  path: '/seedetails/:brandname',
  element: <Branddetails />,
}
,
{
path: '/singleDeteils/:id',
element: <SingleDetails></SingleDetails>,
loader:({params})=> fetch(`http://localhost:5000/products/${params.id}`)
},
{
path: '/update/:id',
element:<Update></Update> ,
loader:({params})=> fetch(`http://localhost:5000/products/${params.id}`)
},
{
  path: '/addcart',
  element: <Cart></Cart>,
  loader: ()=> fetch('http://localhost:5000/cart')
},
// {
//   path: '/cartd/:d',
//   element: <Extra></Extra>,
//   loader: ({params})=> fetch(`http://localhost:5000/cart/${params.id}`)
// }




  ]
  },
]);


export default router;