import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCEsjPDTWM4fZNkfxY7V91u9lkIK-N2Vrk",
  authDomain: "reserve-room-18ed9.firebaseapp.com",
  projectId: "reserve-room-18ed9",
  storageBucket: "reserve-room-18ed9.appspot.com",
  messagingSenderId: "504146613305",
  appId: "1:504146613305:web:7e5283030cf8630984e9e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;