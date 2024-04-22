import { initializeApp } from "firebase/app"; //importere web app vi har lavet i firebase
import { getDatabase, ref, push } from "firebase/database"; //henter data fra database
import { getAuth } from 'firebase/auth'; //henter Authentication fra firebase, hvor vi har oprettet en bruger til medarbejder login

const firebaseConfig = {
    apiKey: "AIzaSyDhtUn10iWgeN91xWs3L9lI7wJoeWP3Kmk",
    authDomain: "swd-eksamen.firebaseapp.com",
    databaseURL: "https://swd-eksamen-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "swd-eksamen",
    storageBucket: "swd-eksamen.appspot.com",
    messagingSenderId: "933553372898",
    appId: "1:933553372898:web:ca3b01c8741e9a654aa8bb"
  };  //const er kopiret fra firebaseprojektet, så vi får præcis vores database

  const app = initializeApp(firebaseConfig); //De næste tre linjer laver referencer til det vi har importeret
  const db = getDatabase(app);
  export const auth = getAuth(app);

  export {db, ref, push}; //eksportere så db, ref og push kan bruges andre steder