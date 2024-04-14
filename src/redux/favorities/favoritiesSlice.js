import { createSlice } from "@reduxjs/toolkit";
import { addFavorities, fetchFavorities } from "./favoritiesOperations";

const initialState = {
  favorities: [],
};

const handleFetchFavoritiesFulfilled = (state, action) => {
  console.log(action.payload);
  state.favorities = Object.values(action.payload);
};
const handleAddFavorities = (state, action) => {
  state.favorities = Object.values(action.payload);
};

const favoritiesSlice = createSlice({
  name: "favorities",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorities.fulfilled, handleFetchFavoritiesFulfilled)
      .addCase(addFavorities.fulfilled, handleAddFavorities);
  },
});

export const favoritiesReducer = favoritiesSlice.reducer;
