import { createSlice } from "@reduxjs/toolkit";
// import the api data file 

const words = [{ word: "hello" }, { word: "good job" }];
// this will go away 
const initialStateValue = words[0];

export const wordSlice = createSlice({
  name: "word",
  // this is state name - so maybe wordBank is a better name 
  initialState: { value: initialStateValue },
  reducers: {
    update: (state, action) => {
      const guessedWord = action.payload;
      console.log(guessedWord);

      const isCorrectWord = state.value.word === guessedWord;
      console.log(isCorrectWord);
      console.log(state.value.word);
      if (isCorrectWord) {
        const currentIndex = words.findIndex(
          (wordObj) => wordObj.word === state.value.word
        );
        if (currentIndex < words.length - 1) {
          state.value = words[currentIndex + 1];
        } else {
          // If we're at the end of the array, loop back to the beginning.
          state.value = words[0];
        }
      }
    },
  },
});

export const { update } = wordSlice.actions;

export default wordSlice.reducer;
