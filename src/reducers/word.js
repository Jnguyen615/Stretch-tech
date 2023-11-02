import { createSlice } from "@reduxjs/toolkit";
// import the api data file

// const words = [
//   {
//     word: "hello",
//     audio: "https://api.dictionaryapi.dev/media/pronunciations/en/hello-au.mp3",
//   },
//   {
//     word: "goodbye",
//     audio:
//       "https://api.dictionaryapi.dev/media/pronunciations/en/goodbye-us.mp3",
//   },
// ];
// this will go away
const initialStateValue = {
  words: [],
  currentWordIndex: 0,
};

export const wordSlice = createSlice({
  name: "word",
  // this is state name - so maybe wordBank is a better name
  initialState: { value: initialStateValue },
  reducers: {
    update: (state, action) => {
      const guessedWordStatus = action.payload;
      if (guessedWordStatus) {
        state.value.currentWordIndex += 1;
        // come back to this
        console.log(
          "RAN UPDATE - current index is",
          state.value.currentWordIndex
        );
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
