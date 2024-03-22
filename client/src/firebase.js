// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "myblog-26b86.firebaseapp.com",
  projectId: "myblog-26b86",
  storageBucket: "myblog-26b86.appspot.com",
  messagingSenderId: "14443328642",
  appId: "1:14443328642:web:f005f028659211b9a0309b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);