// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBymb2NFFo7MHrRU_TNg7tWEPaojmhUiQI",
  authDomain: "travellers-3f649.firebaseapp.com",
  projectId: "travellers-3f649",
  storageBucket: "travellers-3f649.appspot.com",
  messagingSenderId: "566521874455",
  appId: "1:566521874455:web:d6e14725d902d40b7a7452",
  measurementId: "G-QBYLR93MJ6"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
  export  const db = getFirestore()



