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
          Survey progress:{' '}
        </label>
        <progress className="progress-bar" id="survey" value="2" max="8" />
      </div>
      <section className="question-container">
        {/* Radio Buttons */}
        <h2>Whats your current mood?</h2>
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
          ))}
          <input type="submit" className="continue-btn" value="Next" />
        </form>

        {/* Continue button */}
      </section>
    </>
  );
};

export default QuestionTwo;
