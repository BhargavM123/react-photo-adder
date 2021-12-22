import * as firebase from 'firebase';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCjRnDL_JP4PlJdjWH_n0pVsu0d95fomVw",
    authDomain: "photoviewer-bd607.firebaseapp.com",
    projectId: "photoviewer-bd607",
    databaseURL : "https://photoviewer-bd607.firebaseio.com",
    storageBucket: "photoviewer-bd607.appspot.com",
    messagingSenderId: "153234668960",
    appId: "1:153234668960:web:6413d0438bff984b88f8c5"
  };

const App = initializeApp(firebaseConfig);

const database = firebase.database()

export {database}