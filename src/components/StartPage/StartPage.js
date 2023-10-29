import { Link } from "react-router-dom";

function StartPage() {
  return (
    <div className="start-page-container">
      <h1>start</h1>
      <Link to="/game">
        <button>Start!</button>
      </Link>
      <h2>Help Speckle Get His Snacks!</h2>
    </div>
  );
}

export default StartPage;
