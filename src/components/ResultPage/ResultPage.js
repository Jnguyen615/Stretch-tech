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
        {/* creates a new array of 16 undefined values then iterates over each element, the _ indicated the elements value is ignored and the index parameter represents the indexn of the element in the array. _ is a placeholder for unused variable as the value is not needed to render the dots. It creates a series of div elements with the dot class. The key attribute uses the index to uniquely identify each element when react renders  */}
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
