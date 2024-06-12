// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0y4th0OPBuQDwO1qWmH4FyWsT9x7buLM",
  authDomain: "login-page-458bd.firebaseapp.com",
  projectId: "login-page-458bd",
  storageBucket: "login-page-458bd.appspot.com",
  messagingSenderId: "1064462778190",
  appId: "1:1064462778190:web:1ab69e9c2e9b3022b6281f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleAuthprovider = new GoogleAuthProvider();
