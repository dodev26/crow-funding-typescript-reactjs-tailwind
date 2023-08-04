import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGo5ZkRGyXd3SZT_qzDn2ErE1yErwdOGo",
  authDomain: "crow-funding2023.firebaseapp.com",
  projectId: "crow-funding2023",
  storageBucket: "crow-funding2023.appspot.com",
  messagingSenderId: "702204691520",
  appId: "1:702204691520:web:b7f1fd43ab35ffa7834ba5",
  measurementId: "G-N8P13BE0JJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

