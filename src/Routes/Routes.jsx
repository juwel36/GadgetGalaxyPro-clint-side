import {
  createBrowserRouter,
  
} from "react-router-dom";
import Root from "../Root/Root";
import ErrorElement from "../Component/ErrorElement";
import Home from "../pages/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
  children:[
{
path:'/',
element: <Home></Home>
}


  ]
  },
]);


export default router;