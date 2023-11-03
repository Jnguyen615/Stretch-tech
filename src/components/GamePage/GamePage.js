import { useSelector } from "react-redux";
import LetterInputs from "../LetterInputs/LetterInputs";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import "./GamePage.css";
import sealBody from "../../images/Seal-body.png";
// import yellowFish from "../../images/yellowFish.png";
import fishOutlined from "../../images/fish-outline1.png";
import fishOutlined2 from "../../images/fish-outline2.png";
import orangeFish from "../../images/orangeFish.png";

function GamePage() {
  const words = useSelector(state => state.word.words);
  const currentIndex = useSelector(state => state.word.currentIndex);
  const word = words[currentIndex];
  const counterValue = useSelector(state => state.increment.value);
  const sealSpacing = counterValue * 9.5;
  if (!word) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="game-page-container">
        <div className="game-page-upper">
          <h3 className="game-page-counter">{counterValue + 1} of 10</h3>
          <h1 className="game-page-title">Listen and Spell</h1>
          <h3 className="game-page-counter invisible">0 of 10</h3>
        </div>
        <div className="game-page-lower">
          <AudioPlayer />
          <LetterInputs />
        </div>
        <div className="seal-movement-container">
          <img
            className="seal-body"
            src={sealBody}
            style={{ left: `${sealSpacing}vw` }}
          ></img>
        </div>
        <div className="fish-container">
          <img
            src={fishOutlined2}
            alt="orange fish"
            className="fish"
            id="fish1"
          ></img>
          <img
            src={fishOutlined2}
            alt="orange fish"
            className="fish"
            id="fish2"
          ></img>
          <img
            src={orangeFish}
            alt="orange fish"
            className="fish"
            id="fish3"
          ></img>
          <img
            src={orangeFish}
            alt="orange fish"
            className="fish"
            id="fish4"
          ></img>
          <img
            src={orangeFish}
            alt="orange fish"
            className="fish"
            id="fish5"
          ></img>
          <img
            src={orangeFish}
            alt="orange fish"
            className="fish"
            id="fish6"
          ></img>
          <img
            src={orangeFish}
            alt="orange fish"
            className="fish"
            id="fish7"
          ></img>
          <img
            src={orangeFish}
            alt="orange fish"
            className="fish"
            id="fish8"
          ></img>
          <img
            src={orangeFish}
            alt="orange fish"
            className="fish"
            id="fish9"
          ></img>
          <img
            src={orangeFish}
            alt="orange fish"
            className="fish"
            id="fish10"
          ></img>
        </div>
        <div>
          <div className="progress-container">
            <div className="progress-line"></div>
          </div>
          <footer className="ocean-floor">Word to test: {word.word}</footer>
        </div>
      </div>
    );
  }
}

export default GamePage;
