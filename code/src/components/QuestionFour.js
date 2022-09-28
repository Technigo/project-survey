/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
import React from 'react';

const QuestionFour = ({ handleSubmit, animal, handleAnimalChange }) => {
  return (
    <>
      {/* Progressbar */}
      <div className="progress-bar-container">
        <label className="progress-label" htmlFor="survey">
          Survey progress:{' '}
        </label>
        <progress className="progress-bar" id="survey" value="4" max="8" />
      </div>
      <section className="question-container">
        {/* Form */}
        <h1>Pick an animal?</h1>
        <form className="select-style" onSubmit={handleSubmit}>
          <select
            className="select-form"
            onChange={handleAnimalChange}
            value={animal}>
            <option value="default">Choose:</option>
            <option value="seagurkin">seagurkin</option>
            <option value="hippopotomus">hippopotomus</option>
            <option value="blobfish">blobfish</option>
            <option value="sloth">sloth</option>
          </select>
          <input type="submit" className="continue-btn" value="Next" />
        </form>
      </section>
    </>
  );
};

export default QuestionFour;
