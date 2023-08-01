// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdM_NpMPfxugkYEaWQZakxx2tzXlp4yf8",
  authDomain: "practice-ff692.firebaseapp.com",
  projectId: "practice-ff692",
  storageBucket: "practice-ff692.appspot.com",
  messagingSenderId: "622327775239",
  appId: "1:622327775239:web:52e9c716618df1d052aaa2",
  measurementId: "G-JPLCFYCDK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
  
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    location.href="./Budget.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

});