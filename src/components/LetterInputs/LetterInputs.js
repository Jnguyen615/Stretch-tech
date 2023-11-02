import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { update } from "../../reducers/word";
import { increment } from "../../reducers/Increment";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import "./LetterInputs.css";

function LetterInputs() {
  const dispatch = useDispatch();
  // included this piece of state for stying purposes. See the input for the styling conditional.
  const [submitted, setSubmitted] = useState(false);
  const [incorrectCount, setIncorrectCount] = useState(0);

  // GSM
  const words = useSelector((state) => state.word.words);
  const currentIndex = useSelector((state) => state.word.currentIndex);
  const word = words[currentIndex];
  const counterValue = useSelector((state) => state.increment.value);
  console.log(word);
  const navigate = useNavigate();
  const wordLength = word.word.length;
  const wordAsArray = word.word.split("");

  const [letterStates, setLetterStates] = useState(
    Array(wordLength).fill({ letter: "", status: false })
  );

  const inputRefs = useRef(Array(wordLength).fill(null));

  useEffect(() => {
    // Every time the word changes, update the letter state to a new empty letter objects each with their own status of true = "right" or false = "not right"
    setLetterStates(Array(wordLength).fill({ letter: "", status: false }));
    // for styling purposes, to change the syling back to original state - no styling
    setSubmitted(false);
  }, [word]);

  const updateLetterState = (index, value) => {
    // Function to update the state of a letter input field at a given index
    // Create a copy of the current letterStates array
    // Update the value of the letter from input at the specified index
    // Check to see if that is the correct letter
    // IF YES - update the letter status to true // IF NO - keep the current false status
    // Set the state with the updated array, this stores the letter in state to be checked if all letters are right later
    const updatedStates = [...letterStates];

    updatedStates[index] = { letter: value, status: false };
    // const changeLetterStatus = isLetterCorrect(
    //   wordAsArray,
    //   index,
    //   updatedStates
    // );
    // if (changeLetterStatus) {
    //   updatedStates[index] = { letter: value, status: true };
    // }
    setLetterStates(updatedStates);

    if (index < wordLength - 1 && value !== "") {
      inputRefs.current[index + 1]?.focus();
    }
  };

  useEffect(() => {
    inputRefs.current = Array(wordLength).fill(null);
  }, [wordLength]);

  const isLetterCorrect = (wordLetters, index, letterStateToCheck) => {
    if (wordLetters[index] === letterStateToCheck[index].letter) {
      return true;
    }
    return false;
  };

  const isWordCorrect = (allLettersStateToCheck) => {
    let fullWord = "";
    for (const letter of allLettersStateToCheck) {
      fullWord = fullWord.concat(letter.letter);
    }
    return fullWord === word.word;
  };

  function handleSubmission() {
    const isCorrect = isWordCorrect(letterStates);

    if (isCorrect) {
      // If all the letters are correct, send true to update reducer -> go to the next word
      dispatch(update(true));
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
          setIncorrectCount((prevIncorrectCount) => prevIncorrectCount + 1);
        }
      });
      // If the word is incorrect, update styling and don't proceed to the next word
      const updatedStates = letterStates.map((letterState) => ({
        letter: letterState.letter,
        status:
          letterState.letter === wordAsArray[letterStates.indexOf(letterState)],
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
            // changed to a map to make this clearer for all us beginners
            <input
              // maybe we'll have some inline styling happening in here for the boxes
              maxLength={1}
              key={i}
              value={letterState.letter}
              ref={(element) => (inputRefs.current[i] = element)}
              onChange={(event) => updateLetterState(i, event.target.value)}
              className={
                submitted ? (letterState.status ? "correct" : "incorrect") : ""
              }
            />
          ))}
        </div>
        {/* {counterValue === 10 ? (
        // ==== UPDATE =====
        // I think that this actually won't be a 'button' with a link - we'll need to just immediately route to the results page IF the counter value increments to 10
        // Not sure what that will mean for code but I think below code will change. <--- Agreed! Made the change. 
        <Link to="/results">
          <button
            className="submit-word-btn"
            onClick={() => {
              const guessedWord = letterStates.join("");
              console.log(guessedWord);
              dispatch(update(guessedWord));
              dispatch(increment());
            }}
          >
            Submit
          </button>
        </Link>
      ) : ( */}
        {/* // ===== UPDATE END ===== */}
        <button
          className="submit-word-btn"
          onClick={handleSubmission}
          //NOTE: Moved the below logic to a handle
          // onClick={() => {
          //   if (isWordCorrect(letterStates)) {
          //     // If all the letters are correct send true to update reducer -> goes to the next word
          //     dispatch(update(true));
          //     dispatch(increment());
          //     setLetterStates(
          //       letterStates.map((letterState) => ({
          //         letter: letterState.letter,
          //         status: false,
          //       }))
          //     );
          //   }
          //   // what happens if false? Nothing? Maybe highlight the letters that have status: false
          // }}
        >
          submit
        </button>
      </div>
      {/* )} */}
      <div className="feedback-container">
        {/* we will need to add logic here to display a descriptive message if right or wrong */}
        {incorrectCount ? (
          <h2 className="feedback-message">
            You've got this! You're {incorrectCount} letter off!
          </h2>
        ) : (
          <h2 className="feedback-message"></h2>
        )}
      </div>
    </div>
  );
}

export default LetterInputs;

// research conditional rendering for 5 seconds (display confetti animation)
