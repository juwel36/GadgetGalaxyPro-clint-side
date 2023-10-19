import {  NavLink } from "react-router-dom";
import img1 from '../assets/Add a heading.png'
import { useContext } from "react";
import { AuthContext } from "../authprovider/AuthProvider";

const Navbar = () => {

  const {user,logOut}=useContext(AuthContext)

  const loggedOut = () => {
    logOut()
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch(error => {
        console.log("Error logging out:", error);
      });
  };


  const category = (
    <>
      <li> <NavLink to='/'>Home</NavLink> </li>
      <li> <NavLink to='/addproduct'>Add Product</NavLink> </li>
      <li> <NavLink to='/addcart'>My Cart</NavLink> </li>
    </>
  )

  return (
    <div>
      <div className="navbar bg-black ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-white rounded-box w-52">
      {
        category
      }
      </ul>
    </div>
    <img className="w-36" src={img1} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal text-white px-1">
    {
        category
      }
    </ul>
  </div>
  <div className="navbar-end">
  {
  user ? <p className="text-white"> {user.displayName}</p> : ''
}

          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">

            {user && user.photoURL ? <img src={user.photoURL} alt="User Profile" /> : "" }
            </div>
          </label>
  {user ? (
            <button onClick={loggedOut} className="btn bg-slate-500 text-white border-none" >Sign Out</button>
          ) : (
            <NavLink to='/login' className="btn bg-slate-700 text-white border-none px-6">Log in</NavLink>
          )}
  </div>
</div>
      
    </div>
  );
};

export default Navbar;