import { createSlice } from "@reduxjs/toolkit";
// import the api data file

const words = [
  {
    word: "hello",
    audio: "https://api.dictionaryapi.dev/media/pronunciations/en/hello-au.mp3",
  },
  {
    word: "goodbye",
    audio:
      "https://api.dictionaryapi.dev/media/pronunciations/en/goodbye-us.mp3",
  },
];
// this will go away
const initialStateValue = words[0];

export const wordSlice = createSlice({
  name: "word",
  // this is state name - so maybe wordBank is a better name
  initialState: { value: initialStateValue },
  reducers: {
    update: (state, action) => {
      const guessedWordStatus = action.payload;
      if (guessedWordStatus) {
        const currentIndex = words.findIndex(
          (wordObj) => wordObj.word === state.value.word
        );
        if (currentIndex < words.length - 1) {
          state.value = words[currentIndex + 1];
          console.log(state.value);
        } else {
          // If we're at the end of the array, loop back to the beginning.
          state.value = words[0];
        }
      }
    },
    // reducer to literally update the state
  },
});

export const { update } = wordSlice.actions;

export default wordSlice.reducer;
