import { createSlice } from "@reduxjs/toolkit";

// Define a function to get the initial state from sessionStorage
const getInitialStateFromSessionStorage = () => {
  const storedState = sessionStorage.getItem("activeGames");
  if (storedState) {
    return JSON.parse(storedState);
  }
  return {
    games: false,
  };
};

const initialState = getInitialStateFromSessionStorage();

const activeGameSlice = createSlice({
  name: "activeGames",
  initialState,
  reducers: {
    setActiveGames: (state, action) => {
      state.games = action.payload;

      // Store the updated state in sessionStorage
      sessionStorage.setItem("activeGames", JSON.stringify(state));
    },
    removeActiveGames: (state) => {
      state.games = false;

      // Clear the state from sessionStorage when logging out
      sessionStorage.removeItem("activeGames");
    },
  },
});

export const { setActiveGames, removeActiveGames } = activeGameSlice.actions;

export default activeGameSlice.reducer;
