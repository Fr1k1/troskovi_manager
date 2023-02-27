import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyAigJ8BhaHvYeFek0F7xcS6tRR0Rq5rqe4",
    authDomain: "racunimanager.firebaseapp.com",
    databaseURL: "https://racunimanager-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "racunimanager",
    storageBucket: "racunimanager.appspot.com",
    messagingSenderId: "165086419660",
    appId: "1:165086419660:web:8ac90231c7247237f38069"
  };


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);