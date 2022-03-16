import React from "react";

const Summary = ({ result }) => (
  <div className="sumary">
    <h2 className="summary-message">Hello {result[0]}!</h2>
    <p className="summary-text">
      Your first answer about <strong>The persistence of memory</strong> is
      <span className="summary-answer">
        <strong> {result[1]}</strong>
      </span>
    </p>
    <p className="summary-text">
      Your first answer about <strong>JW Rowling</strong> is
      <span className="summary-answer">
        <strong> {result[2]}</strong>
      </span>
    </p>
  </div>
);
export default Summary;
