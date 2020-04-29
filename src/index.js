import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';


import firebase from 'firebase/app';
import 'firebase/firestore'
 
const firebaseConfig = {
  apiKey: "AIzaSyCGc5rWRguvJeSA_SXgayeTl130sYZwgJw",
  authDomain: "music-83601.firebaseapp.com",
  databaseURL: "https://music-83601.firebaseio.com",
  projectId: "music-83601",
  storageBucket: "music-83601.appspot.com",
  messagingSenderId: "718881965530",
  appId: "1:718881965530:web:e5efd1ac6ad562bf0fece3",
  measurementId: "G-5WL9GTPB6S"
};
 
if (firebase.apps.length === 0)
   firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore()


const App = () =>{
  return(
      <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  )
}

ReactDOM.render(<App/>,document.getElementById("root"));


serviceWorker.unregister();
