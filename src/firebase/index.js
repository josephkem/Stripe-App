import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChYhmioDDTsQSUVdfwcz7BMNt-QSVGtvo",
  authDomain: "commerce-app-5371b.firebaseapp.com",
  projectId: "commerce-app-5371b",
  storageBucket: "commerce-app-5371b.appspot.com",
  messagingSenderId: "145661718626",
  appId: "1:145661718626:web:d95bf5cfe7d8710646213b",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const firestore = getFirestore();
