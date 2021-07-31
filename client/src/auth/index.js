import firebase from "firebase";

const config = {
  apiKey: "AIzaSyB1C4P4Qv7GSrd9kcxMKQx211HzA3_iRl0",
  authDomain: "cleanfits-app.firebaseapp.com",
  databaseURL: "https://cleanfits-app.firebaseio.com",
  projectId: "cleanfits-app",
  storageBucket: "cleanfits-app.appspot.com",
  messagingSenderId: "1082120578140"
};

!firebase.apps.length && firebase.initializeApp(config);
const db = firebase.firestore();

let isAuthenticated = false;
firebase
  .auth()
  .onAuthStateChanged(user =>
    user ? (isAuthenticated = true) : (isAuthenticated = false)
  );

export { db, firebase, isAuthenticated };
