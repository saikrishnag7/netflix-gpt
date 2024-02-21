// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxDnGNoXSpKZF0H7pTKsHmwPFvE3UUyxI",
  authDomain: "netflixgpt-a1994.firebaseapp.com",
  projectId: "netflixgpt-a1994",
  storageBucket: "netflixgpt-a1994.appspot.com",
  messagingSenderId: "590211334039",
  appId: "1:590211334039:web:9f0a6e673e5d55507b8ed2",
  measurementId: "G-LX4NBB9EY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();