import { Link, useNavigate } from "react-router-dom";
import gpng from '../../assets/google.png'
import { AuthContext } from "../../authprovider/AuthProvider";
import { useContext, useState } from "react";
import Swal from "sweetalert2";

const Login = () => {

  const { Loginguser, googleAuth } = useContext(AuthContext)
  const navigate = useNavigate()
  const [Error, setError] = useState("");

  const handlelogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    Loginguser(email, password)
    .then(res => {
      console.log(res.user);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: ' Successfully Log In',
        showConfirmButton: false,
        timer: 1500
      })
      navigate('/')
    })
    .catch(error => {
      {
        setError(error.message);
      }
    })
    
  }


  const handlegoogleLogin = () => {
    googleAuth()
      .then(res => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: ' Successfully Log In',
          showConfirmButton: false,
          timer: 1500
        })
        navigate('/')
      })
      .catch(error => {
        console.log(error);
      })

  }


  return (
    <div>
       <div className="hero h-[89vh] ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-white font-bold">Login now!</h1>

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handlelogin}  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                <label className="label">
                  <p href="#" className="label-text-alt  ">Dont't Have an account ?<span className='text-red-600'> <Link to='/regestraion'>Regestraion</Link></span> </p>
                </label>
                {Error && <p className="text-red-600"> {Error} </p>}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gray-700 text-white">Login</button>
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
    </div>
  );
};

export default Login;