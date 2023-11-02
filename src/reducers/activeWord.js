// import { createSlice } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux/es/hooks/useSelector";
// // import the api data file

// // this will go away
// const initialStateValue = {};

// export const activeWordSlice = createSlice({
//   name: "activeWord",
//   // this is state name - so maybe wordBank is a better name
//   initialState: { value: initialStateValue },
//   reducers: {
//     update: (state, action) => {
//       const guessedWordStatus = action.payload;
//       if (guessedWordStatus) {
//         const currentIndex = words.findIndex(
//           (wordObj) => wordObj.word === state.value.word
//         );
//         if (currentIndex < words.length - 1) {
//           state.value = words[currentIndex + 1];
//           console.log(state.value);
//         } else {
//           // If we're at the end of the array, loop back to the beginning.
//           state.value = words[0];
//         }
//       }
//     },
//   },
// });

// export const { update } = activeWordSlice.actions;

// export default activeWordSlice.reducer;
