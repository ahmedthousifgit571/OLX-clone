import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDYh4-W6C2Fr7Byx_Cc0Kh2hHKopkN7nHQ",
  authDomain: "fir-4dbe7.firebaseapp.com",
  projectId: "fir-4dbe7",
  storageBucket: "fir-4dbe7.appspot.com",
  messagingSenderId: "892854312305",
  appId: "1:892854312305:web:1e385f67dcfc0b5615aad0",
  measurementId: "G-RKYSZ08F7G",
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
