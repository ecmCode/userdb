// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "@firebase/analytics";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBceVvjsmfUvZRcJvMYG8XzjWLKbnfe71I",
  authDomain: "users-61f2d.firebaseapp.com",
  projectId: "users-61f2d",
  storageBucket: "users-61f2d.appspot.com",
  messagingSenderId: "340881691171",
  appId: "1:340881691171:web:374c8e958f515c56dd5796",
  measurementId: "G-T268FKYSKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app)