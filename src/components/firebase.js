// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqZjFj2CIKV0oVNJs4TiSD_bhFc-tJ9rk",
  authDomain: "clone-3d330.firebaseapp.com",
  projectId: "clone-3d330",
  storageBucket: "clone-3d330.firebasestorage.app",
  messagingSenderId: "771487755475",
  appId: "1:771487755475:web:9bb6cf4604d49b2ccdf826"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth();
export const db = getFirestore(app);
export default app;