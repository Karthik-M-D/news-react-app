// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAG7GLj643UX64sNIWnfW8Fk8q1oe_SwQY",
    authDomain: "newsapp-8f94c.firebaseapp.com",
    projectId: "newsapp-8f94c",
    storageBucket: "newsapp-8f94c.appspot.com",
    messagingSenderId: "703659449346",
    appId: "1:703659449346:web:db0bf5e4ce7b2fb2a89b1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);