/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
import React from 'react';

const mythicalCreatures = [
  'Loch Ness Monster',
  'little Mermaid',
  'Orc',
  'Goblin',
  'Fairy Godmother',
];
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
        {/* Radio Buttons */}
        <h2>Which mythical creature would you like to believe is real?</h2>
        <form className="radio-button-container">
          {mythicalCreatures.map((radioButtonInput) => (
            <label key={radioButtonInput}>
              <input
                type="radio"
                value={radioButtonInput}
                onChange={handleCreatureChange}
                checked={radioButtonInput === creature}
              />
              {radioButtonInput}
            </label>
          ))}
          {/* Alternative selection */}
          <form className="form-style">
            <label>Other:</label>
            <input
              type="text"
              value={creature}
              onChange={handleCreatureChange}
            />
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

export default QuestionSeven;
