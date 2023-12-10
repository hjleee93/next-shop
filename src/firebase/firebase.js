import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi6EUycj_qXfrwt6hQdUvxZoFC7LYAvfg",
  authDomain: "react--next-shop-app.firebaseapp.com",
  projectId: "react--next-shop-app",
  storageBucket: "react--next-shop-app.appspot.com",
  messagingSenderId: "94841334284",
  appId: "1:94841334284:web:df5fe4657e397b18b2dc29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;