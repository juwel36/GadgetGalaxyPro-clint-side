// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_5qoVpnEK-MkGKtblZrPzDGTOsoeF_g8",
  authDomain: "gadgetgalaxypro-fc66c.firebaseapp.com",
  projectId: "gadgetgalaxypro-fc66c",
  storageBucket: "gadgetgalaxypro-fc66c.appspot.com",
  messagingSenderId: "40180040356",
  appId: "1:40180040356:web:5644420a8e06f5d6cedc31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 export default auth