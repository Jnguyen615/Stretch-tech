import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  words: [],
  currentIndex: 0,
};

export const wordSlice = createSlice({
  name: "word",
  initialState: initialStateValue,
  reducers: {
    update: (state, action) => {
      const guessedWordStatus = action.payload;
      if (guessedWordStatus) {
        state.currentIndex += 1;
        console.log("RAN UPDATE - current index is", state.currentIndex);
      }
    },
    setAllWordInfo: (state, action) => {
      const wordsArray = action.payload;
      state.words = wordsArray;
      state.currentIndex = 0;
    },
  },
});

export const { update, setAllWordInfo } = wordSlice.actions;

export default wordSlice.reducer;
