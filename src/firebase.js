import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDE8yPkLomMyYrLnu3f_t37CFd_eptOCo8",
    authDomain: "calendar-firebase-e3f9f.firebaseapp.com",
    databaseURL: "https://calendar-firebase-e3f9f-default-rtdb.firebaseio.com",
    projectId: "calendar-firebase-e3f9f",
    storageBucket: "calendar-firebase-e3f9f.appspot.com",
    messagingSenderId: "534820117922",
    appId: "1:534820117922:web:00d0ec4ef1d0eb7b0ae6fb",
    measurementId: "G-9P678RTSDQ"
  };
  // Initialize Firebase
  const firebaseDB = firebase.initializeApp(firebaseConfig);
  export default firebaseDB.database().ref()