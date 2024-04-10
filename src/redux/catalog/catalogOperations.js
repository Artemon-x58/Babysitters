import { initializeApp } from "firebase/app";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  endAt,
  get,
  getDatabase,
  limitToFirst,
  limitToLast,
  orderByChild,
  query,
  ref,
  startAt,
} from "firebase/database";

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
  async ({ currentPage, itemsPerPage, filter }, thunkAPI) => {
    try {
      const startIndex = (currentPage - 1) * itemsPerPage;
      let queryRef;

      switch (filter) {
        case "a to z":
          queryRef = query(
            babysittersRef,
            orderByChild("name"),
            limitToFirst(startIndex + itemsPerPage)
          );
          break;
        case "z to a":
          queryRef = query(
            babysittersRef,
            orderByChild("name"),
            endAt("\uf8ff"),
            limitToLast(startIndex + itemsPerPage)
          );
          break;
        case "less than 10$":
          queryRef = query(
            babysittersRef,
            orderByChild("price_per_hour"),
            endAt(10),
            limitToFirst(startIndex + itemsPerPage)
          );
          break;
        case "greater than 10$":
          queryRef = query(
            babysittersRef,
            orderByChild("price_per_hour"),
            startAt(10),
            limitToLast(startIndex + itemsPerPage)
          );
          break;
        case "popular":
          queryRef = query(
            babysittersRef,
            orderByChild("rating"),
            limitToLast(startIndex + itemsPerPage)
          );
          break;
        case "not popular":
          queryRef = query(
            babysittersRef,
            orderByChild("rating"),
            limitToFirst(startIndex + itemsPerPage)
          );
          break;
        case "show all":
          queryRef = query(
            babysittersRef,
            limitToFirst(startIndex + itemsPerPage)
          );
          break;
        default:
          queryRef = query(
            babysittersRef,
            limitToFirst(startIndex + itemsPerPage)
          );
      }

      const snapshot = await get(queryRef);
      return snapshot.val();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
