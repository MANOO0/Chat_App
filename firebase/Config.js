// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import {  getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9Ffq40-2-mrkOFzhpeOciFaeslgsW47k",
  authDomain: "test-cf487.firebaseapp.com",
  projectId: "test-cf487",
  storageBucket: "test-cf487.appspot.com",
  messagingSenderId: "33649810348",
  appId: "1:33649810348:web:9a566362c8da112d3f3809"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app,auth,db};