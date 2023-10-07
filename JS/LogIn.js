import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);
const Auth = getAuth();

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    // Get form input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Sign in user with email and password
    signInWithEmailAndPassword(Auth, email, password)
        .then(() => {
            // User signed in successfully
            window.location.href = "profile.html"; // Redirect to the profile page
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
});
