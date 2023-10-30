import { useSelector } from "react-redux";
import LetterInputs from "../LetterInputs/LetterInputs";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import "./GamePage.css";

function GamePage() {
  const word = useSelector((state) => state.word.value);
  // const counterValue = useSelector((state) => state.increment.value);

  // console.log(counterValue);
  // this can be deleted in the future

  return (
    <div className="game-page-container">
      <h1>Game</h1>
      <div className="boxes-container">
        <AudioPlayer />
        <h2>Word to test: {word.word}</h2>
        {/* this can be deleted in the future */}
        <LetterInputs />
      </div>
      {/* <div
        style={{
          height: "100px",
          width: "100px",
          backgroundColor: "black",
          marginLeft: `${counterValue * 50}px`,
        }}
      ></div> */}
    </div>
  );
}

export default GamePage;
