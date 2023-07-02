import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdoMJ9lagqUFBX4vnZHTj9CsjEEtWfEwU",
  authDomain: "react-netflix-clone-41e2f.firebaseapp.com",
  projectId: "react-netflix-clone-41e2f",
  storageBucket: "react-netflix-clone-41e2f.appspot.com",
  messagingSenderId: "950899292105",
  appId: "1:950899292105:web:43cd68d36fd01da527da18",
};
// Initialize Firebase app
const app = initializeApp(firebaseConfig);
// Get Firebase authentication instance
export const auth = getAuth();
// Get Firebase Firestore instance
export const db = getFirestore();
// Create a user document in Firestore from the authenticated user
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // Create the user document in Firestore
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userDocRef;
};
// Create a new user with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
// Sign in user with email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
// Listen for changes in the authentication state
export const onAuthStateChangeListener = (callback) =>
  onAuthStateChanged(auth, callback);
// Sign out the currently authenticated user
export const signOutUser = async () => await signOut(auth);
