import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBrqlnvRgWo2OUiGNNgCbUe9Ej-QOiueEM",
  authDomain: "natalsolidario-b3a1c.firebaseapp.com",
  projectId: "natalsolidario-b3a1c",
  storageBucket: "natalsolidario-b3a1c.firebasestorage.app",
  messagingSenderId: "37747583532",
  appId: "1:37747583532:web:0dc852fc3b872b465b3f89",
  measurementId: "G-8BTN1XRG6Z"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export {auth, db};