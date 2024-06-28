// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJBdQSSjp7Hea2xIMDIzk5d0pJpdmOw4U",
  authDomain: "bytejobs-567f7.firebaseapp.com",
  projectId: "bytejobs-567f7",
  storageBucket: "bytejobs-567f7.appspot.com",
  messagingSenderId: "120706759016",
  appId: "1:120706759016:web:559455460d3233daaa7edd",
  measurementId: "G-S7569VLPVC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db}
