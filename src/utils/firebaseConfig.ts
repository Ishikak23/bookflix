// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.APP_FIREBASE_KEY,
  authDomain: "bookflix-30d5d.firebaseapp.com",
  projectId: "bookflix-30d5d",
  storageBucket: "bookflix-30d5d.firebasestorage.app",
  messagingSenderId: "981219134476",
  appId: "1:981219134476:web:f05cbff50389b691f1b229",
  measurementId: "G-3RGNCDM687",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log('analytics,', analytics)

export const auth = getAuth();
