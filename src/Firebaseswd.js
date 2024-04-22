import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {


    apiKey: "AIzaSyDhtUn10iWgeN91xWs3L9lI7wJoeWP3Kmk",
    authDomain: "swd-eksamen.firebaseapp.com",
    databaseURL: "https://swd-eksamen-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "swd-eksamen",
    storageBucket: "swd-eksamen.appspot.com",
    messagingSenderId: "933553372898",
    appId: "1:933553372898:web:ca3b01c8741e9a654aa8bb"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  export {db, ref, push};