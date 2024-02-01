// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9oTsbBSnVQUDJkl7ViRBKPQxWN3poRLU",
  authDomain: "netflixgpt-5726c.firebaseapp.com",
  projectId: "netflixgpt-5726c",
  storageBucket: "netflixgpt-5726c.appspot.com",
  messagingSenderId: "110419868597",
  appId: "1:110419868597:web:3405a79020b0ca266277fc",
  measurementId: "G-D0B04LF2ET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

export const auth = getAuth();
