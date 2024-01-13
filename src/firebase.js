// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA61QTP_v2G2ZB1M-dKtE30WT6tO6h4N6s",
  authDomain: "react-chatroom-4dcb7.firebaseapp.com",
  projectId: "react-chatroom-4dcb7",
  storageBucket: "react-chatroom-4dcb7.appspot.com",
  messagingSenderId: "467436498253",
  appId: "1:467436498253:web:f56a4a0c057e12848b9b04",
  measurementId: "G-JMVZJH9LNC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();