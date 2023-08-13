import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: process.env.REACT_APP_apiKey,

  authDomain: "my-project-1485266254230.firebaseapp.com",

  projectId: "my-project-1485266254230",

  storageBucket: "my-project-1485266254230.appspot.com",

  messagingSenderId: "353478574256",

  appId: "1:353478574256:web:3a577a406b16b4b1e33b75"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
