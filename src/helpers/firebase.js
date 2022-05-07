// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK7PZh7tgVilyP_fmwBEwiOBZ-Dhg4AaY",
  authDomain: "akc-prod.firebaseapp.com",
  projectId: "akc-prod",
  storageBucket: "akc-prod.appspot.com",
  messagingSenderId: "616679426072",
  appId: "1:616679426072:web:55d60304ddb3679ba99b6d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
