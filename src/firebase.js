// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Add this import

const firebaseConfig = {
  apiKey: "AIzaSyAk0f04Xe-t_FJIEZx_qgShopt7jPOW7c8",
  authDomain: "authentication-59a63.firebaseapp.com",
  projectId: "authentication-59a63",
  storageBucket: "authentication-59a63.appspot.com",
  messagingSenderId: "325798255558",
  appId: "1:325798255558:web:f54abe63cc2cce8292b0c7",
  measurementId: "G-05G4KL55KE"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore(); // Initialize Firestore

export { app, auth, db }; // Exporting Firestore for usage in other files
