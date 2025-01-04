// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGF8dpZ17oKSnPE9q8cTpI3GMBGv8P014",
    authDomain: "course-recommendation-sep24.firebaseapp.com",
    databaseURL: "https://course-recommendation-sep24-default-rtdb.firebaseio.com",
    projectId: "course-recommendation-sep24",
    storageBucket: "course-recommendation-sep24.appspot.com",
    messagingSenderId: "763979158396",
    appId: "1:763979158396:web:7f3c8652233b2103bb8af9",
    measurementId: "G-59QR5KM464"
    };
    
    // Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

console.log("Firebase app initialized successfully");

// Export the initialized app and database
export { app, database };