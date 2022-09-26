/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
import React from 'react';

const QuestionOne = ({ changeStep }) => {
  return (
    <section className="question-one-container">
      <div className="progress-bar-container">
        <label htmlFor="survey">Survey progress: </label>
        <progress className="progress-bar" id="survey" value="1" max="3" />
      </div>

      <h1>Question 1</h1>
      <p>What is your name?</p>
      <button className="continue-btn" type="button" onClick={changeStep}>
        Continue
      </button>
    </section>
  );
};

export default QuestionOne;
