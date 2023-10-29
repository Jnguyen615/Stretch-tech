import { useSelector } from "react-redux";
import LetterInputs from "../LetterInputs/LetterInputs";
import AudioPlayer from "../AudioPlayer/AudioPlayer";

function GamePage() {
  const word = useSelector((state) => state.word.value);
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
    </div>
  );
}

export default GamePage;
