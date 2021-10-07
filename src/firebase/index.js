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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const usersRef = collection(firestore, "users");

  const userRef = doc(firestore, "users", `${userAuth.uid}`);

  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(doc(usersRef, `${userAuth.uid}`), {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const firestore = getFirestore();
export const auth = getAuth();
