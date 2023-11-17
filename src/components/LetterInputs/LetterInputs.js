import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import "./LetterInputs.css";
import { update } from "../../reducers/word";
import { increment } from "../../reducers/Increment";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LetterInputs() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [incorrectCount, setIncorrectCount] = useState(0);

  // GSM
  const currentIndex = useSelector(state => state.word.currentIndex);
  const word = useSelector(state => state.word.words[currentIndex]);
  const counterValue = useSelector(state => state.increment.value);
  const inputRefs = useRef([]);
  const wordAsArray = word.word.split("");
  var wordLength = word.word.length;
  const [letterStates, setLetterStates] = useState(
    Array(wordLength).fill({ letter: "", status: false }),
  );

  useEffect(() => {
    setLetterStates(Array(wordLength).fill({ letter: "", status: false }));
    setSubmitted(false);
  }, [currentIndex]);

  useEffect(() => {
  }, [letterStates]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, wordLength);
  }, [wordLength]);

  useEffect(() => {
    if (inputRefs.current.length > 0) {
      inputRefs.current[0]?.focus();
    }
  }, [inputRefs.current]);

  useEffect(() => {

    const allInputsFilled = letterStates.every(
      letterState => letterState.letter !== ''
    );

    if (allInputsFilled) {
      const submitButton = document.querySelector('.submit-word-btn');
      if (submitButton) {
        submitButton.focus();
      }
    }
  }, [letterStates]);

  const updateLetterState = (index, value) => {
    const lowerCaseValue = value.toLowerCase();
    const updatedStates = [...letterStates];
    updatedStates[index] = { letter: lowerCaseValue, status: false };
    setLetterStates(updatedStates);
    if (index < wordLength - 1 && lowerCaseValue !== "") {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const isWordCorrect = allLettersStateToCheck => {
    let fullWord = "";
    for (const letter of allLettersStateToCheck) {
      fullWord = fullWord.concat(letter.letter);
    }
    return fullWord === word.word;
  };

  function handleSubmission() {
    const isCorrect = isWordCorrect(letterStates);
    if (inputRefs.current.length > 0) {
      inputRefs.current[0].focus();
    }

    if (isCorrect) {
      dispatch(update(isCorrect));
      dispatch(increment());
      setSubmitted(false);
      setIncorrectCount(0);
      if (counterValue === 9) {
        navigate("/results");
      }
    } else {
      setIncorrectCount(0);
      letterStates.forEach((letterState, index) => {
        if (letterState.letter !== wordAsArray[index]) {
          setIncorrectCount(prevIncorrectCount => prevIncorrectCount + 1);
        }
      });

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
        <div className="letter-boxes-container"  >
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
        <button className="submit-word-btn" onClick={handleSubmission} style={{color: 'black'}} autoFocus>
          submit
        </button>
      </div>
      <div className="feedback-container">
        {incorrectCount === 1 ? (
          <h2 className="feedback-message">
            You've got this! You're {incorrectCount} letter off!
          </h2>
        ) : incorrectCount > 1 ? (
          <h2 className="feedback-message">
            So close! You're {incorrectCount} letters off!
          </h2>
        ) : (
          <h2 className="feedback-message"></h2>
        )}
      </div>
    </div>
  );
}

export default LetterInputs;
