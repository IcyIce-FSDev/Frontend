import { createSlice } from "@reduxjs/toolkit";

// Define a function to get the initial state from sessionStorage
const getInitialStateFromSessionStorage = () => {
  const storedState = sessionStorage.getItem("authState");
  if (storedState) {
    return JSON.parse(storedState);
  }
  return {
    user: "Loading...",
    isAuth: false,
  };
};

const initialState = getInitialStateFromSessionStorage();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;

      // Store the updated state in sessionStorage
      sessionStorage.setItem("authState", JSON.stringify(state));
    },
    logoutUser: (state) => {
      state.user = "Loading...";
      state.isAuth = false;

      // Clear the state from sessionStorage when logging out
      sessionStorage.removeItem("authState");
    },
  },
});

export const { setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
