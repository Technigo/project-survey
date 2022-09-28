/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
import React from 'react';

const QuestionSeven = ({
  handleStepIncrease,
  creature,
  handleCreatureChange,
}) => {
  return (
    <>
      {/* Progressbar */}
      <div className="progress-bar-container">
        <label className="progress-label" htmlFor="survey">
          Survey progress:{' '}
        </label>
        <progress className="progress-bar" id="survey" value="7" max="8" />
      </div>
      <section className="question-container">
        {/* Mytical creature */}
        <div className="form-container">
          <h1 className="question">
            What mythical creature would you like to believe are real?
          </h1>
          <form className="form-style">
            <label>Mythical creature:</label>
            <input
              type="text"
              value={creature}
              onChange={handleCreatureChange}
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

export default QuestionSeven;
