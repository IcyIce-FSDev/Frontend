import { combineReducers } from "redux";
import { createSlice } from "@reduxjs/toolkit";

// Define a function to get the initial state from sessionStorage
const getInitialStateFromSessionStorage = (sliceName) => {
  const storedState = sessionStorage.getItem(`${sliceName}State`);
  if (storedState) {
    return JSON.parse(storedState);
  }
  return {
    active: false,
  };
};

const initialStateFn = getInitialStateFromSessionStorage("fn");
const initialStateOsrs = getInitialStateFromSessionStorage("osrs");
const initialStateOw = getInitialStateFromSessionStorage("ow");

const fnSlice = createSlice({
  name: "fn",
  initialState: initialStateFn,
  reducers: {
    updateState: (state, action) => {
      state.active = action.payload;
      // Store the updated state in sessionStorage
      sessionStorage.setItem("fnState", JSON.stringify(state));
    },
    removeState: (state, action) => {
      sessionStorage.removeItem("fnState");
    },
  },
});

const osrsSlice = createSlice({
  name: "osrs",
  initialState: initialStateOsrs,
  reducers: {
    updateState: (state, action) => {
      state.active = action.payload;
      // Store the updated state in sessionStorage
      sessionStorage.setItem("osrsState", JSON.stringify(state));
    },
    removeState: (state, action) => {
      sessionStorage.removeItem("osrsState");
    },
  },
});

const owSlice = createSlice({
  name: "ow",
  initialState: initialStateOw,
  reducers: {
    updateState: (state, action) => {
      state.active = action.payload;
      // Store the updated state in sessionStorage
      sessionStorage.setItem("owState", JSON.stringify(state));
    },
    removeState: (state, action) => {
      sessionStorage.removeItem("owState");
    },
  },
});

export const { updateState: updateStateFn, removeState: removeStateFn } =
  fnSlice.actions;
export const { updateState: updateStateOsrs, removeState: removeStateOsrs } =
  osrsSlice.actions;
export const { updateState: updateStateOw, removeState: removeStateOw } =
  owSlice.actions;

export const rootReducer = combineReducers({
  fn: fnSlice.reducer,
  osrs: osrsSlice.reducer,
  ow: owSlice.reducer,
});
