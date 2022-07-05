//import firebase from "firebase";
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBLMZqLb8dXZfAx98wlnJFKI9NUE7MToJA",
    authDomain: "final-linkedin-clone-797c7.firebaseapp.com",
    projectId: "final-linkedin-clone-797c7",
    storageBucket: "final-linkedin-clone-797c7.appspot.com",
    messagingSenderId: "756320048092",
    appId: "1:756320048092:web:07c6e310d2041597b9f519"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;