import { createSlice } from "@reduxjs/toolkit";

const words = [{ word: "hello" }, { word: "good job" }];
const initialStateValue = words[0];

export const wordSlice = createSlice({
  name: "word",
  initialState: { value: initialStateValue },
  reducers: {
    update: (state) => {
      const currentIndex = words.findIndex(
        (wordObj) => wordObj.word === state.value.word
      );
      if (currentIndex < words.length - 1) {
        state.value = words[currentIndex + 1];
      } else {
        // If we're at the end of the array, loop back to the beginning.
        state.value = words[0];
      }
    },
  },
});

export const { update } = wordSlice.actions;

export default wordSlice.reducer;
