/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
import React from 'react';

const QuestionEight = ({ handleStepIncrease, food, handleFoodChange }) => {
  return (
    <>
      {/* Progressbar */}
      <div className="progress-bar-container">
        <label className="progress-label" htmlFor="survey">
          Survey progress:{' '}
        </label>
        <progress className="progress-bar" id="survey" value="8" max="8" />
      </div>
      <section className="question-container">
        {/* Favorite food */}
        <div className="form-container">
          <h1 className="question">Name a food that doesnt have onion?</h1>
          <form className="form-style">
            <label>Food:</label>
            <input type="text" value={food} onChange={handleFoodChange} />
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

export default QuestionEight;
