/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
import React from 'react';

const radioButtonInput = [
  'inspring',
  'terrible',
  'constipated',
  'marvellous',
  'irritable',
  'awesome',
];
// const handleRadioButtonChange = (event) => {
//   setRadioButton(event.target.value);
// };

const QuestionOne = ({ handleStepIncrease, name, handleNameChange }) => {
  return (
    <>
      <div className="progress-bar-container">
        {/* Progressbar */}
        <label className="progress-label" htmlFor="survey">
          Survey progress:{' '}
        </label>
        <progress className="progress-bar" id="survey" value="1" max="3" />
      </div>
      {/* Name input */}
      <section className="question-container">
        <div className="form-container">
          <label>name:</label>
          <input type="text" value={name} onChange={handleNameChange} />

          <p>Name: </p>
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

export default QuestionOne;
