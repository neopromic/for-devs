import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { Auth, getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDEEW78jqKNMemIwedSItLt0zMv_D6fBcg",
  authDomain: "creattek-services.firebaseapp.com",
  databaseURL: "https://creattek-services-default-rtdb.firebaseio.com",
  projectId: "creattek-services",
  storageBucket: "creattek-services.appspot.com",
  messagingSenderId: "10606137426",
  appId: "1:10606137426:web:17eb7e3ebe72c2fbbacf8b",
  measurementId: "G-K9QRM2XED5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
const db = getFirestore(app);

export { db, app, auth }