import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: localStorage.getItem("user_data"),
  userId: localStorage.getItem("user_data"),
  open: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      (state.isAuth = true), (state.userId = action.payload);
      localStorage.setItem("user_data", action.payload);
    },
    logout: (state) => {
      (state.isAuth = false), (state.userId = null);
      localStorage.removeItem("user_data");
    },
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
