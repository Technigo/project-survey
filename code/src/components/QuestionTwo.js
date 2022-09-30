/* eslint-disable react/no-unknown-property */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
import React from 'react';

const radioButtonObject = [
  'brilliant',
  'agreeable',
  'big-headed',
  'patronizing',
  'hardworking',
  'charismatic',
];

const QuestionTwo = ({ mood, handleMoodChange, handleSubmit }) => {
  return (
    <>
      {/* Progressbar */}
      <div className="progress-bar-container">
        <label className="progress-label" htmlFor="survey">
          Progress{' '}
        </label>
        <progress className="progress-bar" id="survey" value="2" max="8" />
      </div>
      <section className="question-container">
        {/* Radio Buttons */}
        <h2>How would you describe your avatar?</h2>
        <form className="radio-button-container" onSubmit={handleSubmit}>
          {radioButtonObject.map((radioButtonInput) => (
            <label className="radio-button-overlay" key={radioButtonInput}>
              <input
                type="radio"
                className="radio-button"
                value={radioButtonInput}
                onChange={handleMoodChange}
                checked={radioButtonInput === mood}
              />
              {radioButtonInput}
            </label>
          ))}{' '}
          {/* Alternative selection */}
          <div className="input-text-container">
            <label htmlFor="alt-selection">
              {/* Other: */}
              <input
                placeholder="Other"
                className="input-form"
                id="alt-selection"
                type="text"
                onChange={handleMoodChange}
              />
            </label>
          </div>
          <input type="submit" className="continue-btn" value="Next" />
        </form>

        {/* Continue button */}
      </section>
    </>
  );
};

export default QuestionTwo;
