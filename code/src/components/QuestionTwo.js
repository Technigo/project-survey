/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
import React from 'react';

const radioButtonObject = [
  'inspring',
  'terrible',
  'constipated',
  'marvellous',
  'irritable',
  'awesome',
];
const QuestionTwo = ({ mood, handleMoodChange, handleStepIncrease }) => {
  return (
    <>
      {/* Progressbar */}
      <div className="progress-bar-container">
        <label className="progress-label" htmlFor="survey">
          Survey progress:{' '}
        </label>
        <progress className="progress-bar" id="survey" value="2" max="8" />
      </div>
      <section className="question-container">
        {/* Radio Buttons */}
        <h2>Whats your current mood?</h2>
        <form className="radio-button-container">
          {radioButtonObject.map((radioButtonInput) => (
            <label key={radioButtonInput}>
              <input
                type="radio"
                value={radioButtonInput}
                onChange={handleMoodChange}
                checked={radioButtonInput === mood}
              />
              {radioButtonInput}
            </label>
          ))}
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

export default QuestionTwo;
