import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { update } from "../../reducers/word";
import { increment } from "../../reducers/Increment";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./LetterInputs.css";

function LetterInputs() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // included this piece of state for stying purposes. See the input for the styling conditional.
  const [submitted, setSubmitted] = useState(false);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [index, setIndex] = useState(0);

  // GSM
  const currentIndex = useSelector(state => state.word.currentIndex);
  const word = useSelector(state => state.word.words[currentIndex]);
  const counterValue = useSelector(state => state.increment.value);

  var wordLength = word.word.length;
  const wordAsArray = word.word.split("");
  const [letterStates, setLetterStates] = useState(
    Array(wordLength).fill({ letter: "", status: false }),
  );
  const inputRefs =useRef([])

  useEffect(() => {
    setLetterStates(Array(wordLength).fill({ letter: "", status: false }));
    setSubmitted(false);
    console.log("WORD AS ARRAY IS", wordAsArray);
    console.log("The value of word is set", word);
    console.log("Current Index in letter inputs is", currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    console.log(letterStates);
  }, [letterStates]);
  
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, wordLength)
  }, [wordLength])
   
  useEffect(() => {
    if (inputRefs.current.length > 0) {
      inputRefs.current[0]?.focus();
    }
  }, []);
  const updateLetterState = (index, value) => {
  const lowerCaseValue = value.toLowerCase(); 
    const updatedStates = [...letterStates];
    updatedStates[index] = { letter: lowerCaseValue, status: false };
    setLetterStates(updatedStates);
    if (index < wordLength - 1 && lowerCaseValue !== "") {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Function to check if word is right against letters all put together
  const isWordCorrect = allLettersStateToCheck => {
    let fullWord = "";
    for (const letter of allLettersStateToCheck) {
      fullWord = fullWord.concat(letter.letter);
    }
    console.log("CURRENT INDEX", currentIndex);
    console.log("COMPARISON WORD.WORD", word.word);
    console.log("COMPARISON FULL WORD", fullWord);
    console.log("Status of words compared", fullWord === word.word);
    return fullWord === word.word;
  };

  function handleSubmission() {
    const isCorrect = isWordCorrect(letterStates)
    if (inputRefs.current.length > 0) {
      inputRefs.current[0].focus();
    }

    if (isCorrect) {
      // If all the letters are correct, send true to update reducer -> update current index
      dispatch(update(isCorrect));
      dispatch(increment()); // this updates the count
      setSubmitted(false);
      setIncorrectCount(0);
      if (counterValue === 9) {
        // 9 because if the user already has 9 points, and the user clicks submit, and they are correct, they will be navigated to the results page.
        navigate("/results");
      }
    } else {
      setIncorrectCount(0);
      letterStates.forEach((letterState, index) => {
        if (letterState.letter !== wordAsArray[index]) {
          setIncorrectCount(prevIncorrectCount => prevIncorrectCount + 1);
        }
      });
      // If the word is incorrect, update styling and don't proceed to the next word
      const updatedStates = letterStates.map((letterState, index) => ({
        letter: letterState.letter,
        status: letterState.letter === wordAsArray[index],
      }));
      setLetterStates(updatedStates);
    }
    setSubmitted(true);
  }

  return (
    <div className="letter-inputs-container">
    <div className="boxes-container">
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {letterStates.map((letterState, i) => (
          <input
            id={i}
            maxLength={1}
            key={i}
            value={letterState.letter}
            ref={el => (inputRefs.current[i] = el)}
            onChange={event => updateLetterState(i, event.target.value)}
            className={
              submitted ? (letterState.status ? "correct" : "incorrect") : ""
            }
          />
        ))}
      </div>
      <button className="submit-word-btn" onClick={handleSubmission}>
        submit
      </button>
    </div>
    <div className="feedback-container">
      {/* Feedback messages */}
    </div>
  </div>
  );
}

export default LetterInputs;

// research conditional rendering for 5 seconds (display confetti animation)
