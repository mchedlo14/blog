
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyDQ7Am-S3-hTyGDSKYqbORB940eDoFMHUI",
  authDomain: "blog-eb2d8.firebaseapp.com",
  projectId: "blog-eb2d8",
  storageBucket: "blog-eb2d8.appspot.com",
  messagingSenderId: "559142877636",
  appId: "1:559142877636:web:157a7aed81746439194c91",
  measurementId: "G-0RM6SF0YZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();