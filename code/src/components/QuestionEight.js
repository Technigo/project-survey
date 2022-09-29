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

const QuestionEight = ({ handleSubmit, food, handleFoodChange }) => {
  return (
    <>
      {/* Progressbar */}
      <div className="progress-bar-container">
        <label className="progress-label" htmlFor="survey">
          Progress:{' '}
        </label>
        <progress className="progress-bar" id="survey" value="8" max="8" />
      </div>
      <section className="question-container">
        {/* Favorite food */}
        <h2>Whats for dinner?</h2>
        <form className="radio-button-container" onSubmit={handleSubmit}>
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
          <label htmlFor="food-input">
            Other
            <input id="food-input" type="text" onChange={handleFoodChange} />
          </label>
          <input type="submit" className="continue-btn" value="Next" />
        </form>
        {/* Continue button */}
      </section>
    </>
  );
};

export default QuestionEight;
