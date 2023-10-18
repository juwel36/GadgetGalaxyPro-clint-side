import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firbaseAuth";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
  const provider = new GoogleAuthProvider();
  const [user,setuser]=useState(null)


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

  const updateprofile =(name,image)=>{
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: image 
    })
    
      }
      

  const logOut =()=>{
  return signOut(auth)
  }

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentuser=>{
    
      console.log("hiiiiiiiiiiii",currentuser);
    setuser(currentuser)
  
    })
    return()=>{
      unSubscribe();
    }
    
    },[])




  const authInfo = {
    createuser,
    Loginguser,
    googleAuth,
    user,
    logOut,
    updateprofile
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