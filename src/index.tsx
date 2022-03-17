import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDADu8Y3eF-pprnahJiGwWmmWcdpnIHT_w",
  authDomain: "fusionapp-b4fb1.firebaseapp.com",
  projectId: "fusionapp-b4fb1",
  storageBucket: "fusionapp-b4fb1.appspot.com",
  messagingSenderId: "204877768077",
  appId: "1:204877768077:web:438666075393d5a9cdc9c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
