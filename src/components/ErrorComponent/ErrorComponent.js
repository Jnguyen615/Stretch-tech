import React from "react";
import { Link } from "react-router-dom";
import "./ErrorComponent.css";

function ErrorComponent() {
  return (
    <div className="error-page">
      <h1 className="error-message">Something Went Wrong</h1>
      <Link to="/">
        <button className="return-home-btn">Return to Home</button>
      </Link>
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

export default ErrorComponent;
