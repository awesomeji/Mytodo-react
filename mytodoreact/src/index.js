import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';



require('firebase/firestore')


const firebaseConfig = {
  apiKey: "AIzaSyCs0gg1gI4Qa_lOdZeQDeTlt_GHkzLZDds",
  authDomain: "diaryproject-8a907.firebaseapp.com",
  projectId: "diaryproject-8a907",
  storageBucket: "diaryproject-8a907.appspot.com",
  messagingSenderId: "591530525529",
  appId: "1:591530525529:web:45e69aa58bd2d804e94248",
  measurementId: "G-QQ4G0HKR9N"
};

firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
