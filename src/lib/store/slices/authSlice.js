import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "Loading...",
  isAuth: false,
  cookieSet: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
      state.cookieSet = true;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isAuth = false;
      state.cookieSet = false;
    },
  },
});

export const { setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
