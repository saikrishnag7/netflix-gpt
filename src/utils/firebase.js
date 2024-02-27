// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2bbI2Lui5F31r_Aex6zVQFDqlKpXlUv0",
  authDomain: "netflix-gpt-6d699.firebaseapp.com",
  projectId: "netflix-gpt-6d699",
  storageBucket: "netflix-gpt-6d699.appspot.com",
  messagingSenderId: "521090712493",
  appId: "1:521090712493:web:a6b41bc76cb99b557b5724",
  measurementId: "G-J1F425YS1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();