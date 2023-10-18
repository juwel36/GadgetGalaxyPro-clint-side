import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firbaseAuth";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
  const provider = new GoogleAuthProvider();

  // create user
  const createuser=(email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password)
  }

  // loging
  const Loginguser = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }

  const googleAuth = ()=>{
  return signInWithPopup(auth,provider)
  }

  const authInfo = {
    createuser,
    Loginguser,
    googleAuth,
  }

  return (
    <div>
        <AuthContext.Provider value={authInfo} >
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;