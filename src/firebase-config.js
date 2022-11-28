// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, EmailAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaEa-Fh5d5nfzcHGh1Ar5MIvD-fljqXAc",
  authDomain: "blog-557a1.firebaseapp.com",
  projectId: "blog-557a1",
  storageBucket: "blog-557a1.appspot.com",
  messagingSenderId: "978999634329",
  appId: "1:978999634329:web:c2f37581020619aa7ecb08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new EmailAuthProvider();