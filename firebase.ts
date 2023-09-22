import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { Auth, getAuth } from "firebase/auth"
import dotenv from 'dotenv';
dotenv.config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MSG_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEANSUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
const db = getFirestore(app);

export { db, app, auth }