import { initializeApp } from "firebase/app";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, getDatabase, limitToFirst, query, ref } from "firebase/database";

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

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchCatalog",
  async ({ currentPage, itemsPerPage }, thunkAPI) => {
    try {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const snapshot = await get(
        query(babysittersRef, limitToFirst(startIndex + itemsPerPage))
      );
      return snapshot.val();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
