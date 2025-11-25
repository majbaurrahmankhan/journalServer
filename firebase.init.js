// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6nQk9_0e0FfVyh206CFg2sBrU1hMgaqA",
  authDomain: "journalserver-25bac.firebaseapp.com",
  projectId: "journalserver-25bac",
  storageBucket: "journalserver-25bac.firebasestorage.app",
  messagingSenderId: "775724594266",
  appId: "1:775724594266:web:378abe5b49d982892ed463",
  measurementId: "G-50JS5TG68N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);