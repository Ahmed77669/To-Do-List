import { getFirestore } from '@firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebase = {
  apiKey: "AIzaSyBIDB0GtpCnXlJPXjFE5vjZd9MyVxQQYJk",
  authDomain: "to-do-list-6fd77.firebaseapp.com",
  projectId: "to-do-list-6fd77",
  storageBucket: "to-do-list-6fd77.appspot.com",
  messagingSenderId: "414836351920",
  appId: "1:414836351920:web:e14f2df1cac179c999ac75",
  measurementId: "G-WZE29D2RMX"
};



const app = initializeApp(firebase);

const db = getFirestore(app);

export { app,db};
