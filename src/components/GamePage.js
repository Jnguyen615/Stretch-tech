import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { update } from "../reducers/word";

function GamePage() {
  const word = useSelector((state) => state.word.value);
  const dispatch = useDispatch();

  const [letter1, setLetter1] = useState("");
  const [letter2, setLetter2] = useState("");
  const [letter3, setLetter3] = useState("");
  const [letter4, setLetter4] = useState("");
  const [letter5, setLetter5] = useState("");

  return (
    <div className="game-page-container">
      <h1>Game</h1>
      <button>Click For Sound</button>
      <div className="boxes-container">
        <h2>Word: {word.word}</h2>
        <input maxLength={1} />
        <input maxLength={1} />
        <input maxLength={1} />
        <input maxLength={1} />
        <input maxLength={1} />
        <button
          className="submit-word-btn"
          onClick={() => dispatch(update(  ))}
        >
          Submit
        </button>
      </div>
      <div className="counter">Counter: 0</div>
    </div>
  );
}

export default GamePage;
