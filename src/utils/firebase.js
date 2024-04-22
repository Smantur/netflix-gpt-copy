// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUlbDJZ42cr0K1-gnFugbX8e72OsbH73E",
  authDomain: "nextflix-gpt-1ced6.firebaseapp.com",
  projectId: "nextflix-gpt-1ced6",
  storageBucket: "nextflix-gpt-1ced6.appspot.com",
  messagingSenderId: "873639398001",
  appId: "1:873639398001:web:8560629d5b0e5e9363e9d0",
  measurementId: "G-GTH68Z0D9N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const auth = getAuth();
