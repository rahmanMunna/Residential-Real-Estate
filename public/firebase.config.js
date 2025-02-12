// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS4CwCw4TH8GXDcwkTLCJ5yXmHIvAuzfM",
  authDomain: "residential-real-estate-bfcff.firebaseapp.com",
  projectId: "residential-real-estate-bfcff",
  storageBucket: "residential-real-estate-bfcff.firebasestorage.app",
  messagingSenderId: "926431535272",
  appId: "1:926431535272:web:9501206d17812b9160229d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;