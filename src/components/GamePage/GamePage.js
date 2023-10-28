import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { update } from "../../reducers/word";
import LetterInputs from "../LetterInputs/LetterInputs";
import AudioPlayer from "../AudioPlayer/AudioPlayer";

function GamePage() {
  const word = useSelector((state) => state.word.value);
  const dispatch = useDispatch();

  const [guess, setGuess] = useState("");
  // const [fullWord, setFullWord] = useState("");
  // const [l1, setLetter1] = useState("");
  // const [l2, setLetter2] = useState("");
  // const [l3, setLetter3] = useState("");
  // const [l4, setLetter4] = useState("");
  // const [l5, setLetter5] = useState("");

  function combineLetters(a, b, c, d, e) {
    var letters = [a, b, c, d, e];
    var newWord = letters.join("");
    return newWord;
  }
  const wordLength = word.word.length;

  return (
    <div className="game-page-container">
      <h1>Game</h1>
      <div className="boxes-container">
        <AudioPlayer />
        <h2>Word: {word.word}</h2>
        {console.log(word.word.length)}
        <LetterInputs wordLength={wordLength} />
        {/* <input
          maxLength={1}
          onChange={(event) => setLetter1(event.target.value)}
        />
        <input
          maxLength={1}
          onChange={(event) => setLetter2(event.target.value)}
        />
        <input
          maxLength={1}
          onChange={(event) => setLetter3(event.target.value)}
        />
        <input
          maxLength={1}
          onChange={(event) => setLetter4(event.target.value)}
        />
        <input
          maxLength={1}
          onChange={(event) => setLetter5(event.target.value)}
        /> */}
        {/* <button
          className="submit-word-btn"
          onClick={() => {
            const guessedWord = combineLetters(l1, l2, l3, l4, l5);
            dispatch(update(guessedWord));
          }}
        >
          Submit
        </button> */}
      </div>
      {/* <div className="counter">Counter: 0</div> */}
    </div>
  );
}

export default GamePage;
