
import React from 'react';

const venues = [
  'Smaller inside venue',
  'Larger inside venue',
  'Smaller outside venue',
  'Larger outside venue',
];

const FirstQuestion = ({ arenaChoice, onArenaChoiceSet, onStepChange, onAmountChoiceSet, onStepGoBack }) => {
  return (
    <form className="formContainer">
      <h1>What kind of venue would you like to be in?</h1>
      {venues.map(
        (
          venue //iterating through each venue available
        ) => (
          <div className="venue-choice">
            <input
              value={venue}
              onChange={onArenaChoiceSet}
              checked={arenaChoice === venue}
              type="radio"
              id={venue}
            />
            <label htmlFor={venue} key={venue}>{venue}</label>
          </div>
        )
      )}
      <h2>How many tickets would you like?</h2>
      <label htmlFor="amount">
        Pick amount:
        <input onChange={onAmountChoiceSet} type="number" id="amount" name="amount-of-tickets" min="1" max="10" />
      </label>
      <div className="buttonContainer">
      <button className="button" onClick={onStepGoBack}>
        Previous question
      </button>
      <button className="button" onClick={onStepChange}>
        Next question
      </button>
      </div>
    </form>
  );
};

export default FirstQuestion;
