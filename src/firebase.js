// src/firebase.js
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEYNm7DsOmi_LRoOyvpjaBUFmdvBmQg3A",
  authDomain: "elitememon-e8a56.firebaseapp.com",
  projectId: "elitememon-e8a56",
  storageBucket: "elitememon-e8a56.firebasestorage.app",
  messagingSenderId: "847257880272",
  appId: "1:847257880272:web:c6b588925286aed1b780d5",
  measurementId: "G-1ZD77NP05E"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, facebookProvider, googleProvider };

