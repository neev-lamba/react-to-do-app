// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlNpJaEw62lQEp8Jx6Z_wRO0ik_XsSudI",
  authDomain: "todo-app-af41a.firebaseapp.com",
  projectId: "todo-app-af41a",
  storageBucket: "todo-app-af41a.appspot.com",
  messagingSenderId: "574279091139",
  appId: "1:574279091139:web:7ab2ccd3065aefb11a7376"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)