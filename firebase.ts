// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCJbu-syLAosIDFPJuDTQbHniBZ4WYzmK0',
  authDomain: 'netflix-2adec.firebaseapp.com',
  projectId: 'netflix-2adec',
  storageBucket: 'netflix-2adec.appspot.com',
  messagingSenderId: '322851997054',
  appId: '1:322851997054:web:d5b66237316f10dbec9f2f',
  measurementId: 'G-L5PKN53609',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
