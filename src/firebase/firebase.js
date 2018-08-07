import firebase from "firebase/app";

// These imports load individual services into the firebase namespace.
import "firebase/auth";
import "firebase/database";

const conf = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(conf);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.addScope("profile");
googleAuthProvider.addScope("email");

const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();




const database = firebase.database;
const auth = firebase.auth;

export { database, auth, googleAuthProvider, facebookAuthProvider};
