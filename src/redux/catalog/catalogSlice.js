import { createSlice } from "@reduxjs/toolkit";
import { fetchCatalog } from "./catalogOperations";

const catalogInitialState = {
  catalog: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};
const handleFetchCatalogFulfilled = (state, action) => {
  state.isLoading = false;
  state.catalog = Object.values(action.payload);
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState: catalogInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, handlePending)
      .addCase(fetchCatalog.fulfilled, handleFetchCatalogFulfilled)
      .addCase(fetchCatalog.rejected, handleRejected);
  },
});

export const catalogReducer = catalogSlice.reducer;
