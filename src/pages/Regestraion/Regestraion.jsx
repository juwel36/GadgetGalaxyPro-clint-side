import { useContext, useState } from 'react';
import gpng from '../../assets/google.png'
import { AuthContext } from '../../authprovider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';






const Regestraion = () => {

  const {createuser,googleAuth} =useContext(AuthContext)
  const [showerror,setshowerror]=useState(null)
  const navigate=useNavigate()



  const handleregestraion = e =>{
    e.preventDefault()
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
  console.log(email,password,name,image);
  
  setshowerror('')
  if (password.length < 6) {
    return setshowerror("Your password must be at least 6 characters long!");
  }
  
  if (!/[A-Z]/.test(password)) {
    return setshowerror("Your password must contain at least one capital letter!");
  }
  
  if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
    return setshowerror("Your password must contain at least one special character!");
  }
  
  
  
  
  
  createuser(email,password)
  .then(res=> {
  console.log(res.user);
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: ' Successfully Regestered',
    showConfirmButton: false,
    timer: 1500
  })

  })
  .catch(error=>{
    console.log(error);
    Swal.fire({
      position: 'top-end',
      icon: 'warning',
      title: 'you already Regestered !!!!!!',
      showConfirmButton: false,
      timer: 1500
    })
  })
  }

  const handlegoogleLogin = ()=>{
    googleAuth()
    .then(res=> {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: ' Successfully Log In',
        showConfirmButton: false,
        timer: 1500
      })
      navigate('/')
    })
    .catch(error=>{
      console.log(error);
    })
  
  }



  return (
    <div>
      <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl text-white font-bold">Regestraion now!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleregestraion} className="p-1 px-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Your Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Image URL</span>
          </label>
          <input type="text" name="image" placeholder="image url" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
          <p href="#" className="label-text-alt  ">Already Have an account ?<span className='text-red-500'> <Link to='/login'>Log In</Link></span> </p>
          </label>
          <p> {showerror} </p>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-gray-700 text-white">Regstraion</button>
        </div>
      </form>
      <div>
      <button onClick={handlegoogleLogin}
  className="mb-3 flex select-none bg-slate-200 mx-auto items-center gap-3 rounded-lg border-b-2 border-blue-gray-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-red-500 transition-all hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  type="button"
  data-ripple-dark="true"
>
  <img src={gpng} alt="metamask" className="h-6 w-6" />
  Continue with Google
</button>
      </div>
    </div>
  </div>
    </div>
  );
};

export default Regestraion;