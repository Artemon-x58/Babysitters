import { createAsyncThunk } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { child, getDatabase, push, ref, set } from "firebase/database";

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
const auth = getAuth();
const usersRef = ref(db, "users");

export const register = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      await updateProfile(user, { displayName: name });

      const newUserRef = child(usersRef, user.uid);

      await set(newUserRef, {
        displayName: user.displayName,
        email: user.email,
        favorities: "",
      });

      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkAPI) => {
    return new Promise((resolve, rejected) => {
      try {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            resolve({ uid: user.uid, displayName: user.displayName });
          } else {
            rejected(null);
          }
        });
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    });
  }
);
