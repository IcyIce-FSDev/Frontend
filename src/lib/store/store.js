import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import activeGameSlice from "./slices/activeGameSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    activeGames: activeGameSlice,
    // Add other slices' reducers here if you have them
  },
});

export default store;
