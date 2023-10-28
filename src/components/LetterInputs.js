import { useState } from "react";
import { useDispatch } from "react-redux";
import word, { update } from "../reducers/word";
import { increment } from "../reducers/Increment";
import { useSelector } from "react-redux";

function LetterInputs({ wordLength }) {
  const word = useSelector((state) => state.word.value);
  // Initializing an array to track the input states for each letter
  // The 'Array(wordLength).fill("")' expression creates an array of 'wordLength' elements, and fills it with empty strings, representing the initial state of each input field. Saw this in a tutorial.

  const [letterStates, setLetterStates] = useState(Array(wordLength).fill(""));

  // Function to update the state of a letter input field at a given index
  const updateLetterState = (index, value) => {
    // Create a copy of the current letterStates array
    const updatedStates = [...letterStates];
    // Update the value of the input at the specified index
    updatedStates[index] = value;
    // Set the state with the updated array, effectively updating the input field
    setLetterStates(updatedStates);
  };

  // Function to clear all input fields
  const clearInputFields = () => {
    // Creating an array of the same length as 'wordLength' with empty values
    const clearedStates = Array(wordLength).fill("");
    // Setting the state with the cleared input values, resetting all input fields
    setLetterStates(clearedStates);
  };

  // Getting access to Redux dispatch to send actions and the counter value from the store
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.increment.value);

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {/* Create an array of input fields based on wordLength. I saw this in a tutorial once, I can't say I know how it's working. sorry!  */}
        {Array.from({ length: wordLength }, (_, i) => (
          <input
            maxLength={1}
            key={i}
            value={letterStates[i]}
            // confession: ChatGBT helped me with this below line, I couldn't figure it out on my own!
            onChange={(event) => updateLetterState(i, event.target.value)}
          />
        ))}
      </div>
      <button
        className="submit-word-btn"
        onClick={() => {
          const guessedWord = letterStates.join("");
          console.log(guessedWord);
          dispatch(update(guessedWord));
          clearInputFields();
          dispatch(increment());
          console.log(word);
        }}
      >
        Submit
      </button>
      <div className="counter">Counter: {counterValue}</div>
    </>
  );
}

export default LetterInputs;
