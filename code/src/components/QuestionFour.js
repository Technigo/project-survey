/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
import React from 'react';

const QuestionFour = ({ handleSubmit, animal, handleAnimalChange }) => {
  return (
    <>
      {/* Progressbar */}
      <div className="progress-bar-container">
        <label className="progress-label" htmlFor="survey">
          Progress:{' '}
        </label>
        <progress className="progress-bar" id="survey" value="4" max="8" />
      </div>
      <section className="question-container">
        {/* Form */}
        <h1>Select an animal or write your own</h1>
        <form className="select-style" onSubmit={handleSubmit}>
          <select
            className="select-form"
            onChange={handleAnimalChange}
            value={animal}>
            <option value="default">Select animal</option>
            <option value="seagurkin">seagurkin</option>
            <option value="hippopotomus">hippopotomus</option>
            <option value="blobfish">blobfish</option>
            <option value="sloth">sloth</option>
            <option value="flamingo">flamingo</option>
          </select>
          {/* Alternative selection */}
          <div className="input-text-container">
            <label htmlFor="alt-selection">
              {/* Animal: */}
              <input
                placeholder="Other"
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

export default QuestionFour;
