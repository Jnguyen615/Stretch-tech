import { Link } from "react-router-dom";

function ResultPage() {
  return (
    <div className='result-page-container'>
      <h1>results</h1>
      <h2>Here is the result</h2>
      <Link to='/'>
        <button>Back To Home</button>
      </Link>
    </div>
  );
}

export default ResultPage;
