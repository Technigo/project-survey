/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
import React from 'react';

const QuestionFour = ({ handleStepIncrease, animal, handleAnimalChange }) => {
  return (
    <>
      {/* Progressbar */}
      <div className="progress-bar-container">
        <label className="progress-label" htmlFor="survey">
          Survey progress:{' '}
        </label>
        <progress className="progress-bar" id="survey" value="4" max="8" />
      </div>
      <section className="question-container">
        {/* Form */}
        <h1>What is the strangest animal you know?</h1>
        <form className="select-style">
          <select
            className="select-form"
            onChange={handleAnimalChange}
            value={animal}>
            <option value="DEFAULT" disabled>
              Choose adjective:
            </option>
            <option value="definitely a">sleak</option>
            <option value="absolutely not a">crooked</option>
          </select>
        </form>
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

export default QuestionFour;
