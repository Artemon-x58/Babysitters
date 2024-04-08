import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { catalogReducer } from "./catalog/catalogSlice";
import { filterReducer } from "./filter/filterSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    catalog: catalogReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
