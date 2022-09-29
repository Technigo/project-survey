/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
import React from 'react';

const radioButtonObject = [
  'awesome',
  'marvellous',
  'dreadful',
  'constipated',
  'sexy',
  'kind',
];

const QuestionTwo = ({ mood, handleMoodChange, handleSubmit }) => {
  return (
    <>
      {/* Progressbar */}
      <div className="progress-bar-container">
        <label className="progress-label" htmlFor="survey">
          Progress:{' '}
        </label>
        <progress className="progress-bar" id="survey" value="2" max="8" />
      </div>
      <section className="question-container">
        {/* Radio Buttons */}
        <h2>How would you describe yourself?</h2>
        <form className="radio-button-container" onSubmit={handleSubmit}>
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
          ))}{' '}
          {/* Alternative selection */}
          <div className="input-text-container">
            <label htmlFor="alt-selection">
              {/* Other: */}
              <input
                placeholder="Other"
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
