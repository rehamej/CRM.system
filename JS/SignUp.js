    // Import Firebase SDKs
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
    import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7j2HFNE4pU13o9Y0pCgCEtAMvm-2dqzc",
  authDomain: "hilinky-test.firebaseapp.com",
  databaseURL: "https://hilinky-test-default-rtdb.firebaseio.com",
  projectId: "hilinky-test",
  storageBucket: "hilinky-test.appspot.com",
  messagingSenderId: "130850188106",
  appId: "1:130850188106:web:c94f56d874b9ca81c0efb3",
  measurementId: "G-33N6M2M5S9"
};

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const Auth = getAuth();
    const database = getDatabase();

    document.getElementById("registrationForm").addEventListener("submit", function (e) {
        e.preventDefault();
        var FirstName = document.getElementById('FirstName').value;
        var Username = document.getElementById('Username').value;
        var Nationality = document.getElementById('Nationality').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var LastName = document.getElementById('LastName').value;
        var Date = document.getElementById('Date').value;
        var City = document.getElementById('City').value;
        var PhoneNumber = document.getElementById('PhoneNumber').value;
        var ConfirmPassword = document.getElementById('ConfirmPassword').value;

        // Create user with email and password
        createUserWithEmailAndPassword(Auth, email, password)
            .then((userCredential) => {
                // User created successfully
                const user = userCredential.user;

                // Save additional user data to Firebase Realtime Database
                const userRef = ref(database, "users/" + user.uid);
                set(userRef, {
                    FirstName: FirstName,
                    Username: Username,
                    Nationality: Nationality,
                    email: email,
                    password: password,
                    LastName: LastName,
                    Date: Date,
                    City: City,
                    PhoneNumber: PhoneNumber,
                    ConfirmPassword: ConfirmPassword,
                });

                alert("Registration successful!");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    })