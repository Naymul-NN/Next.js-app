import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAfxFjjzXvdDYUrNgEziixr1CEhJyOUODA",
  authDomain: "next-auth-first-d6e59.firebaseapp.com",
  projectId: "next-auth-first-d6e59",
  storageBucket: "next-auth-first-d6e59.appspot.com",
  messagingSenderId: "496999369407",
  appId: "1:496999369407:web:d501e938c7621b9380940a"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;