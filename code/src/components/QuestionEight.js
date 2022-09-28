/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
import React from 'react';

const foodObject = [
  'smores',
  'pizza',
  'fried banana',
  'veggie dogs',
  'baked potatoe',
];

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
        <h2>Whats for dinner?</h2>
        <form className="radio-button-container">
          {foodObject.map((radioButtonInput) => (
            <label key={radioButtonInput}>
              <input
                type="radio"
                value={radioButtonInput}
                onChange={handleFoodChange}
                checked={radioButtonInput === food}
              />
              {radioButtonInput}
            </label>
          ))}{' '}
          {/* Alternative selection */}
          <form className="form-style">
            <label>Other:</label>
            <input type="text" value={food} onChange={handleFoodChange} />
          </form>
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

export default QuestionEight;
