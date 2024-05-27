// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-ccced.firebaseapp.com",
  projectId: "mern-blog-ccced",
  storageBucket: "mern-blog-ccced.appspot.com",
  messagingSenderId: "818961040536",
  appId: "1:818961040536:web:51201f9c7c512f30d23ced"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);