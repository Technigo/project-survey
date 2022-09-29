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
const QuestionSeven = ({ handleSubmit, creature, handleCreatureChange }) => {
  return (
    <>
      {/* Progressbar */}
      <div className="progress-bar-container">
        <label className="progress-label" htmlFor="survey">
          Progress:{' '}
        </label>
        <progress className="progress-bar" id="survey" value="7" max="8" />
      </div>
      <section className="question-container">
        {/* Mytical creature */}
        {/* Radio Buttons */}
        <h2>Which mythical creature would you like to believe is real?</h2>
        <form className="radio-button-container" onSubmit={handleSubmit}>
          {mythicalCreatures.map((mythicalCreature) => (
            <label key={mythicalCreature}>
              <input
                type="radio"
                value={mythicalCreature}
                onChange={handleCreatureChange}
                checked={mythicalCreature === creature}
              />
              {mythicalCreature}
            </label>
          ))}
          {/* Alternative selection */}
          <label htmlFor="creature-input">
            Other
            <input
              id="creature-input"
              type="text"
              onChange={handleCreatureChange}
            />
          </label>{' '}
          <input type="submit" className="continue-btn" value="Next" />
        </form>
      </section>
    </>
  );
};

export default QuestionSeven;
