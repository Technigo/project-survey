/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
import React from 'react';

const QuestionTwo = ({ handleStepIncrease }) => {
  return (
    <>
      <div className="progress-bar-container">
        <label className="progress-label" htmlFor="survey">
          Survey progress:{' '}
        </label>
        <progress className="progress-bar" id="survey" value="2" max="3" />
      </div>
      <section className="question-container">
        <h1>Question 2</h1>
        <button
          className="continue-btn"
          type="button"
          onClick={handleStepIncrease}>
          Next
        </button>
      </section>
    </>
  );
};

export default QuestionTwo;
