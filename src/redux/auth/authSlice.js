import { createSlice } from "@reduxjs/toolkit";
import { logOut, refreshUser, register, signIn } from "./authOperations";

const initialState = {
  user: { id: null, name: null },
  isLoggedIn: false,
  isRefreshing: false,
};

const handleRegisterFulfilled = (state, action) => {
  state.user.id = action.payload.uid;
  state.user.name = action.payload.displayName;
  state.isLoggedIn = true;
};

const handleSignInFulfilled = (state, action) => {
  state.user.id = action.payload.uid;
  state.user.name = action.payload.displayName;
  state.isLoggedIn = true;
};

const handlelogOutFulfilled = (state) => {
  state.user = { name: null };
  state.isLoggedIn = false;
};

const handleRefreshUserPending = (state) => {
  state.isRefreshing = true;
};

const handleRefreshUserFullfiled = (state, action) => {
  state.user.id = action.payload.uid;
  state.user.name = action.payload.displayName;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleRefreshUserRejected = (state) => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, handleRegisterFulfilled)
      .addCase(signIn.fulfilled, handleSignInFulfilled)
      .addCase(logOut.fulfilled, handlelogOutFulfilled)
      .addCase(refreshUser.pending, handleRefreshUserPending)
      .addCase(refreshUser.fulfilled, handleRefreshUserFullfiled)
      .addCase(refreshUser.rejected, handleRefreshUserRejected);
  },
});

export const authReducer = authSlice.reducer;
