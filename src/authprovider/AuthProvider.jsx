import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firbaseAuth";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {


  // create user
  const createuser=(email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password)
  }

  const authInfo = {
    createuser,
    
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