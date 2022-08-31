// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfSG9C2Y8rqKwaZo_OrhNYN8HIY6c9HGs",
  authDomain: "fir-app-7229a.firebaseapp.com",
  projectId: "fir-app-7229a",
  storageBucket: "fir-app-7229a.appspot.com",
  messagingSenderId: "35277737499",
  appId: "1:35277737499:web:47ff83689cf05bb1e6f2be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export {auth}