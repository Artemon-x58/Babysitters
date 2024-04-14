import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { catalogReducer } from "./catalog/catalogSlice";
import { filterReducer } from "./filter/filterSlice";
import { favoritiesReducer } from "./favorities/favoritiesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    catalog: catalogReducer,
    filter: filterReducer,
    favorities: favoritiesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
