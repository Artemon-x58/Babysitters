import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { catalogReducer } from "./catalog/catalogSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    catalog: catalogReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
