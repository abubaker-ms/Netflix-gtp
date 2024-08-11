// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuCnyyEuUbWw_q7F0pO6myLQ1k3nrOXvk",
  authDomain: "netflixgpt-d88d4.firebaseapp.com",
  projectId: "netflixgpt-d88d4",
  storageBucket: "netflixgpt-d88d4.appspot.com",
  messagingSenderId: "712638865710",
  appId: "1:712638865710:web:fa21769f9a70e00925dabf",
  measurementId: "G-JFFSFSHMMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
