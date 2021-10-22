import React from "react";
import "./summary.css";
import Range from "./Range";

const Summary = ({ name, drink, tagline, mentor, mentorImage }) => {
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
        <div className="ment-box">
          <p className="summary-text">
            <b>Mentor:</b> {mentor}
          </p>
          <img className="mentorcard" alt="mentor" src={mentorImage} />
        </div>
        <Range />
        <form className="submit-button-form">
          <button className="next-button" type="submit">
            Do it again?
          </button>
        </form>
      </section>
    </div>
  );
};

export default Summary;
