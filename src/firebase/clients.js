// archibo clients.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZCbKBahBAFDYLqxyB66xjtekGraox51w",
  authDomain: "entregafinalgonzalezdidier.firebaseapp.com",
  projectId: "entregafinalgonzalezdidier",
  storageBucket: "entregafinalgonzalezdidier.appspot.com",
  messagingSenderId: "1048905388511",
  appId: "1:1048905388511:web:2dd04c720446e63207b46a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
