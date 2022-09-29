/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
import React from 'react';

const mythicalCreatures = [
  'Loch Ness Monster',
  'the little Mermaid',
  'Robin Hood',
  'Fairy Godmother',
];
const QuestionSeven = ({ handleSubmit, creature, handleCreatureChange }) => {
  return (
    <>
      {/* Progressbar */}
      <div className="progress-bar-container">
        <label className="progress-label" htmlFor="survey">
          Progress{' '}
        </label>
        <progress className="progress-bar" id="survey" value="7" max="8" />
      </div>
      <section className="question-container">
        {/* Mytical creature */}
        {/* Radio Buttons */}
        <h2>Which fictional or real person would you like to meet?</h2>
        <form className="radio-button-container" onSubmit={handleSubmit}>
          {mythicalCreatures.map((mythicalCreature) => (
            <label className="radio-button-overlay" key={mythicalCreature}>
              <input
                type="radio"
                className="radio-button"
                value={mythicalCreature}
                onChange={handleCreatureChange}
                checked={mythicalCreature === creature}
              />
              {mythicalCreature}
            </label>
          ))}
          {/* Alternative selection */}
          <div className="input-text-container">
            <label htmlFor="creature-input">
              {/* Other */}
              <input
                placeholder="Other"
                className="input-form"
                id="creature-input"
                type="text"
                onChange={handleCreatureChange}
              />
            </label>
          </div>{' '}
          <input type="submit" className="continue-btn" value="Next" />
        </form>
      </section>
    </>
  );
};

export default QuestionSeven;
