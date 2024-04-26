// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMRsaok5jOtdoIexRQFmSMkAC1HFpFQfg",
  authDomain: "ecommerce-e4cab.firebaseapp.com",
  databaseURL: "https://ecommerce-e4cab-default-rtdb.firebaseio.com",
  projectId: "ecommerce-e4cab",
  storageBucket: "ecommerce-e4cab.appspot.com",
  messagingSenderId: "35450894351",
  appId: "1:35450894351:web:e2395cd5ece3b7411f8b7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;