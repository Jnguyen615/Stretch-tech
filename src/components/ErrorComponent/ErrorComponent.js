import React from "react";
import { Link } from "react-router-dom";
import './ErrorComponent.css'

function ErrorComponent() {
  return (
    <div className="error-page">
      <h1 className='error-message'>Something Went Wrong</h1>
      <Link to="/">
        <button className="return-home-btn">Return to Home</button>
      </Link>
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

export default ErrorComponent;
