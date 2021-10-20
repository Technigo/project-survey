import React from "react";
import "./summary.css";

const Summary = ({ name, drink, tagline, bravo }) => {
  return (
    <div className="question-container">
      <h2 className="question-title">
        Welcome to 'The real programmers of Technigo'
      </h2>
      <section className="summarybox">
        <h3>Cast of 2021:</h3>
        <p className="summary-text">
          <b>Name:</b> {name}
        </p>
        <p className="summary-text">
          <b>Signature drink:</b> {drink}
        </p>
        <p className="summary-text">
          <b>Tagline:</b> {tagline}
        </p>
        <p className="summary-text">
          <b>Mentor:</b> {bravo}
        </p>
      </section>
    </div>
  );
};

export default Summary;
