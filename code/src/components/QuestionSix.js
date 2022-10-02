/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
import React from 'react';

const animals = [
  'seagurkin',
  'hippopotomus',
  'blobfish',
  'sloth',
  'flamingo',
  'walruss',
];

const QuestionSix = ({ handleSubmit, activeAnimal, handleAnimalChange }) => {
  return (
    <>
      {/* Progressbar */}
      <div className="progress-bar-container">
        <label className="progress-label" htmlFor="survey">
          Progress{' '}
        </label>
        <progress className="progress-bar" id="survey" value="4" max="8" />
      </div>
      <section className="question-container">
        {/* Form */}
        <h1>Select an animal or write your own</h1>
        <form className="radio-button-container" onSubmit={handleSubmit}>
          {animals.map((animal) => (
            <label className="radio-button-overlay" key={animal}>
              <input
                type="radio"
                className="radio-button"
                value={animal}
                onChange={handleAnimalChange}
                checked={animal === activeAnimal}
              />
              {animal}
            </label>
          ))}
          {/* Alternative selection */}
          <div className="input-text-container">
            <label htmlFor="alt-selection">
              {/* Animal: */}
              <input
                placeholder="Other"
                className="input-form"
                id="alt-selection"
                type="text"
                onChange={handleAnimalChange}
              />
            </label>
          </div>
          <input type="submit" className="continue-btn" value="Next" />
        </form>
      </section>
    </>
  );
};

export default QuestionSix;
