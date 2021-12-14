// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut as fbSignOut, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDewxwkBzDG4r2sJpY0OEMS_MuuspqcptU",
  authDomain: "tinder-clone-75054.firebaseapp.com",
  projectId: "tinder-clone-75054",
  storageBucket: "tinder-clone-75054.appspot.com",
  messagingSenderId: "953270155632",
  appId: "1:953270155632:web:fef9d5b73179b1b43d77b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const signIn = (email, password) => (
  signInWithEmailAndPassword(auth, email, password)
)

const signOut = () => fbSignOut(auth);

const register = (email, password) => (
  createUserWithEmailAndPassword(auth, email, password)
)

const authStateChanged = (handleState) => onAuthStateChanged(auth, handleState)

export {
  signIn,
  signOut,
  register,
  authStateChanged
}