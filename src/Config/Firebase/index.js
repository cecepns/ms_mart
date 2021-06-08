import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyARro_5U-kk5xuj3LdYVi9gDI9a-RDMqTo",
    authDomain: "ms-mart-30025.firebaseapp.com",
    databaseURL: "https://ms-mart-30025-default-rtdb.firebaseio.com",
    projectId: "ms-mart-30025",
    storageBucket: "ms-mart-30025.appspot.com",
    messagingSenderId: "703099074590",
    appId: "1:703099074590:web:3210068be84daab87b960f",
    measurementId: "G-H4BVPC9L0G"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export  {auth, db, storage}

export default firebase

