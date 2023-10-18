import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import { rootReducer } from "./slices/qGameSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    game: rootReducer, // Combine all game-related slices into a single reducer
    // Add other slices' reducers here if you have them
  },
});

export default store;
