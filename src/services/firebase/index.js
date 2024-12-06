// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLb0OsZxZMHYy3-gGflYZ7BXcMQdATHo4",
  authDomain: "supremefit-fbcde.firebaseapp.com",
  projectId: "supremefit-fbcde",
  storageBucket: "supremefit-fbcde.firebasestorage.app",
  messagingSenderId: "691227639586",
  appId: "1:691227639586:web:c9c9c3fa354efb5dbeaf7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Agrega este console.log para verificar la inicialización
console.log("Firebase inicializado correctamente:", app);


export const db = getFirestore(app)