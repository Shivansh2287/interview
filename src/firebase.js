// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1WPlHJKEE_EAPK5rWNSnlnN_EYktgk3U",
  authDomain: "react-redux-ebed9.firebaseapp.com",
  projectId: "react-redux-ebed9",
  storageBucket: "react-redux-ebed9.appspot.com",
  messagingSenderId: "424369948510",
  appId: "1:424369948510:web:ff80dfe60cb84d7710f1cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
