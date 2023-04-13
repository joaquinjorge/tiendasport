import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWEm6GZIC1AOs6WUm4tSnF1ubPLmKk1GI",
  authDomain: "tiendasport-a4fbb.firebaseapp.com",
  projectId: "tiendasport-a4fbb",
  storageBucket: "tiendasport-a4fbb.appspot.com",
  messagingSenderId: "470006911132",
  appId: "1:470006911132:web:9edf045baef90391d99d59",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
