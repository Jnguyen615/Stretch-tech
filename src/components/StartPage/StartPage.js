import { useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "./StartPage.css";
import yellowFish from "../../images/yellow-fish.png";
import blueFish from "../../images/blue-fish.png";
import happySeal from "../../images/happy.png";

function StartPage() {
  return (
    <main>
        <div className="start-page-container">
          <h1>Speckle!</h1>
          <img className="happy-seal" src={happySeal}></img>
          <h2>Help Speckle Get His Snacks!</h2>
          
          <Link to="/game">
            <button className="start-btn">Start!</button>
          </Link>
          <div className='start-page-fish-container'>
          <img className="yellow-fish" src={yellowFish}></img>
          <img className="blue-fish" src={blueFish}></img>
          <img className="yellow-fish" src={yellowFish}></img>
          <img className="blue-fish" src={blueFish}></img>
          <img className="yellow-fish" src={yellowFish}></img>
          </div>
        </div>  
    </main>
  );
}

export default StartPage;
