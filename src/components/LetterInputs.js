import { useState } from "react";
import { useDispatch } from "react-redux";
import { update } from "../reducers/word";
import { increment } from "../reducers/Increment";
import { useSelector } from "react-redux";

function LetterInputs({ wordLength }) {
  const [letterStates, setLetterStates] = useState(Array(wordLength).fill(""));

  const updateLetterState = (index, value) => {
    const updatedStates = [...letterStates];
    updatedStates[index] = value;
    setLetterStates(updatedStates);
  };

  const clearInputFields = () => {
    const clearedStates = Array(wordLength).fill("");
    setLetterStates(clearedStates);
  };

  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.increment.value);

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {Array.from({ length: wordLength }, (_, i) => (
          <input
            maxLength={1}
            key={i}
            value={letterStates[i]}
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
        }}
      >
        Submit
      </button>
      <div className="counter">Counter: {counterValue}</div>
    </>
  );
}

export default LetterInputs;
