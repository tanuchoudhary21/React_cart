import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAAF8K-ggZtAyNyKq-ptNedSec72cJS5C4",
  authDomain: "cart-cb597.firebaseapp.com",
  projectId: "cart-cb597",
  storageBucket: "cart-cb597.appspot.com",
  messagingSenderId: "861921984751",
  appId: "1:861921984751:web:74ac5d088abda1aed69b1a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
 <App></App>,
  document.getElementById('root')
);
