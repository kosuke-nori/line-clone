import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyArVKqmXrTKhNko7l8CxeEOjMux7RtEhGk",
  authDomain: "line-clone-2b166.firebaseapp.com",
  projectId: "line-clone-2b166",
  storageBucket: "line-clone-2b166.appspot.com",
  messagingSenderId: "496303974584",
  appId: "1:496303974584:web:5009e3cc616603076c2c4d",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
