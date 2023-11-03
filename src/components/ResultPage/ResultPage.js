import { Link, useNavigate } from "react-router-dom";
import "./ResultPage.css";
import speckle from "../../images/Seal-body.png";

function ResultPage() {
  // added the window reload to reset the score back to 0 when the user navigates back home.
  const navigate = useNavigate();

  function handleRefreshGoHome() {
    navigate("/");
    window.location.reload();
  }

  return (
    <div>
      <div className="result-page-container">
        <h1 className="result-message">Good Job!</h1>
        <img className="speckle-the-seal" src={speckle} alt="Speckle"></img>
        <button className="back-to-home-btn" onClick={handleRefreshGoHome}>
          Back To Home
        </button>
      </div>
      <div className="wrapper">
        {[...Array(16)].map((_, index) => (
          <div key={index}>
            <span className="dot"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ResultPage;
