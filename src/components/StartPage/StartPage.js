import { Link } from "react-router-dom";
import "./StartPage.css";
import yellowFish from "../../images/yellow-fish.png";
import blueFish from "../../images/blue-fish.png";
import happySeal from "../../images/happy.png";

function StartPage() {
  return (
    <main>
      <div className="start-page-container">
        <h1 className="start-page-title">Speckle!</h1>
        <img className="happy-seal" src={happySeal} alt="Happy Seal"></img>
        <h2>Spell your way to the end to help Speckle get his snacks!</h2>
        <Link to="/game">
          <button className="start-btn">Start</button>
        </Link>
        <div className="start-page-fish-container">
          <img className="yellow-fish" src={yellowFish} alt="Yellow Fish"></img>
          <img className="blue-fish" src={blueFish} alt="Blue Fish"></img>
          <img className="yellow-fish" src={yellowFish} alt="Yellow Fish"></img>
          <img className="blue-fish" src={blueFish} alt="Blue Fish"></img>
          <img className="yellow-fish" src={yellowFish} alt="Yellow Fish"></img>
        </div>
      </div>
    </main>
  );
}

export default StartPage;
