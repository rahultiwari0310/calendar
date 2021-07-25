import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDE8yPkLomMyYrLnu3f_t37CFd_eptOCo8",
  authDomain: "calendar-firebase-e3f9f.firebaseapp.com",
  databaseURL: "https://calendar-firebase-e3f9f-default-rtdb.firebaseio.com",
  projectId: "calendar-firebase-e3f9f",
  storageBucket: "calendar-firebase-e3f9f.appspot.com",
  messagingSenderId: "534820117922",
  appId: "1:534820117922:web:00d0ec4ef1d0eb7b0ae6fb",
  measurementId: "G-9P678RTSDQ",
};
// Initialize Firebase
const firebaseDB = firebase.initializeApp(firebaseConfig);
const connection = firebaseDB.database().ref();

//Firebase helpers

//Create or update event in firebase
export const createUpdateEvent = (event, eventId) => {
  if (eventId) {
    connection.child(`events/${eventId}`).set(event, logAndAlert);
  } else {
    connection.child("events").push(event, logAndAlert);
  }
};

//Delete event from DB
export const removeEvent = (eventId, close) => {
  if (window.confirm("Are you sure you want to delete this event ?")) {
    connection.child(`events/${eventId}`).remove(logAndAlert);
    close && close();
  }
};

//Subscribe to events data
export const subscribeToEvents = (callback) => {
  connection.child("events").on("value", (snapshot) => {
    const value = snapshot.val();
    if (value) {
      callback({ ...value });
    }
  });
};

export const logAndAlert = (err) => {
  if(err) {
    console.log("Error:", err);
    window.alert(err.toString());
  }
};
