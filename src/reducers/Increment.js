import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = 0;

export const wordSlice = createSlice({
  name: "increment",
  initialState: { value: initialStateValue },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = wordSlice.actions;

export default wordSlice.reducer;
