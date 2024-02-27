// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA65P-2jAY9RUu4k6AZbiOnKLUUqmeTolQ",
  authDomain: "netflix-gpt-f08e3.firebaseapp.com",
  projectId: "netflix-gpt-f08e3",
  storageBucket: "netflix-gpt-f08e3.appspot.com",
  messagingSenderId: "92234580447",
  appId: "1:92234580447:web:a20a428b43fbdb3df4046a",
  measurementId: "G-WWMY9XXWTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();