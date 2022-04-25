// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWKZVfONNvcYm5ZPuS-P2iDP7YSdGYLvg",
  authDomain: "ema-john-simple-7cc19.firebaseapp.com",
  projectId: "ema-john-simple-7cc19",
  storageBucket: "ema-john-simple-7cc19.appspot.com",
  messagingSenderId: "47659933647",
  appId: "1:47659933647:web:f1f000f4cd96ea8fdefcba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;