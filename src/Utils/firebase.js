// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBrVxk5yWe1dqHPSGfZO8M2YaJDihaI2R8",
    authDomain: "netflixgpt-c3439.firebaseapp.com",
    projectId: "netflixgpt-c3439",
    storageBucket: "netflixgpt-c3439.appspot.com",
    messagingSenderId: "1009553339457",
    appId: "1:1009553339457:web:96cf2ecdeebf46aaad02c0",
    measurementId: "G-SPNFWJZL33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();