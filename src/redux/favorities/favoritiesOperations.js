import { initializeApp } from "firebase/app";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, getDatabase, ref, set } from "firebase/database";
import { firebaseConfig } from "../../js/firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const fetchFavorities = createAsyncThunk(
  "favorities/fetchFavorities",
  async ({ id }, thunkAPI) => {
    try {
      const userRef = ref(db, `/users/${id}`);
      const favoritiesSnapshot = await get(userRef);
      const { favorities } = favoritiesSnapshot.val();
      return favorities;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFavorities = createAsyncThunk(
  "favorite/addFavorities",
  async ({ userId, catalogFavoritiesItem }, thunkAPI) => {
    try {
      const userRef = ref(db, `/users/${userId}`);

      const userSnapshot = await get(userRef);
      const user = userSnapshot.val();
      const currentFavorities = user.favorities || [];

      const updateFavorities = [...currentFavorities, catalogFavoritiesItem];
      await set(userRef, { ...user, favorities: updateFavorities });

      return updateFavorities;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFavorities = createAsyncThunk(
  "favorities/deleteFavorities",
  async ({ userId, itemId }, thunkAPI) => {
    try {
      const userRef = ref(db, `/users/${userId}`);
      const userSnapshot = await get(userRef);
      const user = userSnapshot.val();

      const updateFavorities = user.favorities.filter(
        (item) => item.id !== itemId
      );
      await set(userRef, { ...user, favorities: updateFavorities });

      return updateFavorities;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
