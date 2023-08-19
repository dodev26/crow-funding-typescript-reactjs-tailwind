import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAHHbKhqyitZfrNzIdRIi8tIfgDgneBdo0',
  authDomain: 'crowfundingappv2.firebaseapp.com',
  projectId: 'crowfundingappv2',
  storageBucket: 'crowfundingappv2.appspot.com',
  messagingSenderId: '672270851984',
  appId: '1:672270851984:web:71c8078d4fdc70e48a9d15',
  measurementId: 'G-JZNMC6G28K'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
