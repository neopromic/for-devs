import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { Auth, getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_FIREBASE_KEY,
  authDomain: import.meta.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: import.meta.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.REACT_APP_FIREBASE_BUCKET,
  messagingSenderId: import.meta.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: import.meta.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.REACT_APP_FIREBASE_MEANSUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
const db = getFirestore(app);

export { db, app, auth }