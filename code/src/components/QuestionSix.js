/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
import React from 'react';

const QuestionSix = ({
  handleStepIncrease,
  adjectiveSecond,
  handleAdjectiveSecondChange,
}) => {
  return (
    <>
      {/* Progressbar */}
      <div className="progress-bar-container">
        <label className="progress-label" htmlFor="survey">
          Survey progress:{' '}
        </label>
        <progress className="progress-bar" id="survey" value="6" max="8" />
      </div>
      <section className="question-container">
        {/* Adjective 2 input */}
        <div className="form-container">
          <h1 className="question">What is a synonym to puzzling?</h1>
          <form className="form-style">
            <label>Adjective:</label>
            <input
              type="text"
              value={adjectiveSecond}
              onChange={handleAdjectiveSecondChange}
            />
          </form>
        </div>
        {/* Continue button */}
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

export default QuestionSix;
