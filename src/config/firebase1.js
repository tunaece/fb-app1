// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa7hzcoIvym1ZbsPQnmdozxgJ6QX2rry0",
  authDomain: "fb-app1-7555d.firebaseapp.com",
  projectId: "fb-app1-7555d",
  storageBucket: "fb-app1-7555d.appspot.com",
  messagingSenderId: "589075709425",
  appId: "1:589075709425:web:d9f7c879f1e53f46e95850"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)