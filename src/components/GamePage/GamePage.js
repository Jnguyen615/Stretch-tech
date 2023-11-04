import { useSelector } from "react-redux";
import LetterInputs from "../LetterInputs/LetterInputs";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import "./GamePage.css";
import sealBody from "../../images/Seal-body.png";
import blueFish2 from "../../images/blue-fish2.png";
import orangeFish from "../../images/orangeFish.png";
import redFish from "../..//images/redFish.png";

function GamePage() {
  const words = useSelector((state) => state.word.words);
  const currentIndex = useSelector((state) => state.word.currentIndex);
  const word = words[currentIndex];
  const counterValue = useSelector((state) => state.increment.value);
  const sealSpacing = counterValue * 9.5;
  const fishArray = [...Array(10)];

  if (!word) {
    return <div className='loading-message'>Loading...</div>;
  } else {
    return (
      <div className='game-page-container'>
        <div className='game-page-upper'>
          <div className='game-page-counter-container'>
            <img
              className='game-page-fish-counter'
              src={blueFish2}
              alt='blue fish'
            ></img>
            <h3 className='game-page-counter'> {counterValue + 1} of 10</h3>
          </div>
        </div>
        <div className='game-page-lower'>
          <h1 className='game-page-title'>Listen and Spell</h1>
          <AudioPlayer />
          <LetterInputs />
        </div>
        <div className='seal-movement-container'>
          <img
            className='seal-body'
            src={sealBody}
            alt='flat image of a harbor seal with speckles on their back'
            style={{ left: `${sealSpacing}vw` }}
          ></img>
        </div>
        <div className='fish-container'>
          {fishArray.map((img, index) => {
            const fishId = index + 1;
            const fishAlt =
              fishId <= counterValue + 1 ? "red fish" : "orange fish";
            const fishSrc = fishId <= counterValue + 1 ? redFish : orangeFish;
            return (
              <img
                key={`fish-${fishId}`}
                src={fishSrc}
                alt={fishAlt}
                className='fish'
                id={`fish${fishId}`}
              />
            );
          })}
        </div>
        <div>
          <div className='progress-container'>
            <div className='progress-line'></div>
          </div>
          <footer className='ocean-floor'></footer>
        </div>
      </div>
    );
  }
}

export default GamePage;
