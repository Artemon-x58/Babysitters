import { initializeApp } from "firebase/app";
import { getDatabase, query, ref, limitToFirst, get } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5aBo-xRqHvh6wPs9D4rngJbFt7q_X3C8",
  authDomain: "babysitters-b414b.firebaseapp.com",
  databaseURL:
    "https://babysitters-b414b-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "babysitters-b414b",
  storageBucket: "babysitters-b414b.appspot.com",
  messagingSenderId: "1068081756422",
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const babysittersRef = ref(db, "/babysitters");
const auth = getAuth();

export const getBabysittersListDB = async (currentPage, itemsPerPage) => {
  try {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const snapshot = await get(
      query(babysittersRef, limitToFirst(startIndex + itemsPerPage))
    );
    return snapshot.val();
  } catch (error) {
    console.error("Error fetching babysitters list:", error);
    return null;
  }
};

export const signUp = async (name, email, password) => {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    await updateProfile(user, { displayName: name });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    console.log(user);
  } catch (error) {
    console.error("Sign in error:", error.message);
    throw error;
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Sign out error:", error.message);
    throw error;
  }
};
