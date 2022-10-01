/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';

const pastaSorts = [
  'Penne',
  'Spaghetti',
  'Farfalle',
  'Macaroni',
  'Tagliatelle',
  'Fusilli'
];

// eslint-disable-next-line max-len
const PastaKindQuestion = ({ nameInput, preference, sortOfPasta, onSortOfPastaChange, onStepChange, onPreviousQuestionChange, onEnter }) => {
  return (
    <div className="survey-container">
      <form className="form-question">
        <p tabIndex="0" className="text-pasta">Hello {nameInput}, you are in the mood for {preference}. Answer what kind of pasta you like:</p>
        <div className="pasta-container">
          {pastaSorts.map((sort) => (
            <label className="label-input-pasta" key={sort} htmlFor="sortOfPasta">
              <input
                id={sortOfPasta}
                type="radio"
                value={sort}
                onChange={onSortOfPastaChange}
                checked={sortOfPasta === sort}
                onKeyPress={onEnter} />
              <span>{sort}</span>
            </label>
          ))}
        </div>
        <div className="button-container">
          <button className="survey-button" type="button" onClick={onPreviousQuestionChange}>Back</button>
          <button className="survey-button" type="button" onClick={onStepChange}>Next</button>
        </div>
      </form>
    </div>
  );
};

export default PastaKindQuestion;
