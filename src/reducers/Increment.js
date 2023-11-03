import { createSlice } from "@reduxjs/toolkit";

// Defining an initial value for the state
const initialStateValue = 0;

// Creating a Redux slice using createSlice
export const wordSlice = createSlice({
  // Naming the slice - I think it's representing a part of the application state
  name: "increment",
  // Initial state object with a 'value' property
  initialState: { value: initialStateValue },
  reducers: {
    // This reducer is named 'increment'
    increment: state => {
      // It's going to modify the state by increasing the 'value' property by 1
      state.value += 1;
    },
  },
});

export const { increment } = wordSlice.actions;

export default wordSlice.reducer;
