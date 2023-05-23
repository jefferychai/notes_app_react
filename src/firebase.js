import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCexBbDipXoczzFtNufXg--RMRKCJBmXtM",
  authDomain: "react-notes-70564.firebaseapp.com",
  projectId: "react-notes-70564",
  storageBucket: "react-notes-70564.appspot.com",
  messagingSenderId: "176055393863",
  appId: "1:176055393863:web:ae59a6304850465cd2db62",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
