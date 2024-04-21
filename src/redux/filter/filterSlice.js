import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "a to z",
  reducers: {
    addFilter(state, action) {
      return action.payload;
    },
    resetFilter() {
      return "a to z";
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { addFilter, resetFilter } = filterSlice.actions;
