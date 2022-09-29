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
const PastaKindQuestion = ({ nameInput, sortOfPasta, onSortOfPastaChange, onStepChange, onPreviousQuestionChange, onEnter }) => {
  return (
    <div className="outer-wrapper">
      <div className="survey-container">
        <form>
          <h3>Pasta kind</h3>
          <p>Hello {nameInput}, choose what kind of pasta you like:</p>
          {pastaSorts.map((sort) => (
            <lable key={sort}>
              <input
                id="sortOfPasta"
                type="radio"
                value={sort}
                onChange={onSortOfPastaChange}
                checked={sortOfPasta === sort}
                onKeyPress={onEnter} />
              {sort}
            </lable>
          ))}
        </form>
        <div className="button-container">
          <button className="survey-button" type="button" onClick={onPreviousQuestionChange}>Back</button>
          <button className="survey-button" type="button" onClick={onStepChange}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default PastaKindQuestion;
