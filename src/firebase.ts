import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

const myKey = import.meta.env.API_KEY;
const AUTH_DOMAIN = import.meta.env.AUTH_DOMAIN;
const PROJECT_ID = import.meta.env.PROJECT_ID;
const STORAGE_BUCKET = import.meta.env.STORAGE_BUCKET;
const MESSAGING_SENDER_ID = import.meta.env.MESSAGING_SENDER_ID;
const APP_ID = import.meta.env.APP_ID;
const DATABASE_URL = import.meta.env.VITE_DATABASE_URL;

const firebaseConfig = {
  apiKey: myKey,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  databaseURL: DATABASE_URL,
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export const starCountRef = ref(database, "/teachers");
