import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import firebase from 'firebase/app';
import 'firebase/database';
import { App } from './App';

firebase.initializeApp({
  apiKey: 'AIzaSyC-qdrQgJ2HOi3Fekx23wBuT2JTu7prF1A',
  authDomain: 'technigo-survey-test.firebaseapp.com',
  databaseURL: 'https://technigo-survey-test.firebaseio.com',
  projectId: 'technigo-survey-test',
  storageBucket: 'technigo-survey-test.appspot.com',
  messagingSenderId: '862875453818',
  appId: '1:862875453818:web:9c2951eec161f6568e6ec3',
});

ReactDOM.render(<App />, document.getElementById('root'));
