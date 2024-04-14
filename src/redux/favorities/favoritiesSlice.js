import { createSlice } from "@reduxjs/toolkit";
import {
  addFavorities,
  deleteFavorities,
  fetchFavorities,
} from "./favoritiesOperations";

const initialState = {
  favorities: [],
};

const handleFetchFavoritiesFulfilled = (state, action) => {
  state.favorities = action.payload || [];
};
const handleAddFavorities = (state, action) => {
  state.favorities = action.payload;
};
const handleDeleteFavorities = (state, action) => {
  state.favorities = action.payload;
};

const favoritiesSlice = createSlice({
  name: "favorities",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorities.fulfilled, handleFetchFavoritiesFulfilled)
      .addCase(addFavorities.fulfilled, handleAddFavorities)
      .addCase(deleteFavorities.fulfilled, handleDeleteFavorities);
  },
});

export const favoritiesReducer = favoritiesSlice.reducer;
