import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApGNrpsPZe-R6z7kuR5ZbSLTIPcmOrPRk",
  authDomain: "netflix-d377e.firebaseapp.com",
  projectId: "netflix-d377e",
  storageBucket: "netflix-d377e.appspot.com",
  messagingSenderId: "435540309129",
  appId: "1:435540309129:web:15a0aad414c14aa0bac258",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { app, auth, db };
