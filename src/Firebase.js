import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5f5eKqHPoPIyCXTEmkuGKnS1xZI-YcjU",
  authDomain: "clone-3bcea.firebaseapp.com",
  projectId: "clone-3bcea",
  storageBucket: "clone-3bcea.appspot.com",
  messagingSenderId: "502402459375",
  appId: "1:502402459375:web:3db1c53fddd15498785d1a",
  measurementId: "G-7L7T5Z0VVP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
