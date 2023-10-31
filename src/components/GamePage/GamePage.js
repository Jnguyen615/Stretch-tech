import { useSelector } from "react-redux";
import LetterInputs from "../LetterInputs/LetterInputs";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import "./GamePage.css";

function GamePage() {
  const word = useSelector((state) => state.word.value);
  const counterValue = useSelector((state) => state.increment.value);
  // const counterValue = useSelector((state) => state.increment.value);

  // console.log(counterValue);
  // this can be deleted in the future

  return (
    <div className='game-page-container'>
      <div className='game-page-upper'>
        <h3 className='game-page-counter'>{counterValue} of 10</h3>
        <h1 className='game-page-title'>Play Word</h1>
      </div>
      <div className='game-page-lower'>

      <AudioPlayer />
      {/* this can be deleted in the future */}
      <LetterInputs />
      </div>

      <div className='ocean-floor'>Word to test: {word.word}</div>
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
