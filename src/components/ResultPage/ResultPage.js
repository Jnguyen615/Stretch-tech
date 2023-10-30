import { Link, useNavigate } from "react-router-dom";

function ResultPage() {
  // added the window reload to reset the score back to 0 when the user navigates back home.
  const navigate = useNavigate();

  function handleRefreshGoHome() {
    navigate("/");
    window.location.reload();
  }
  return (
    <div className="result-page-container">
      <h1>results</h1>
      <h2>Here is the result</h2>
      <button onClick={handleRefreshGoHome}>Back To Home</button>
    </div>
  );
}

export default ResultPage;
