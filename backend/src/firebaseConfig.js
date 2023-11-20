// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1a1Qv4QgsZli6DNQ1-_2sYNkbkFcXfY0",
    authDomain: "routes-90cfa.firebaseapp.com",
    projectId: "routes-90cfa",
    storageBucket: "routes-90cfa.appspot.com",
    messagingSenderId: "623418476257",
    appId: "1:623418476257:web:437f1ed19f7f0cbdadd9a0",
    measurementId: "G-CWXT3WYMLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);