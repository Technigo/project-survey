import React from 'react';

import Alert from './Alert';

const plantsArray = ['🌴', '🌷', '🌻'];

const QuestionFour = ({
  favouritePlant,
  onFavouritePlantChange,
  alert,
  onStepChange,
  onEnter,
  onPreviousQuestionChange,
  step,
}) => {
  return (
    <div className='form-container'>
      <form className='form-question'>
        <label className='label-text' htmlFor='favouritePlant'>
          What is you favourite plant?
        </label>
        <div className='radio-button-container'>
          {plantsArray.map((plant) => (
            <label className='radio-option-plant' key={plant}>
              <input
                id={favouritePlant}
                type='radio'
                value={plant}
                onChange={onFavouritePlantChange}
                checked={favouritePlant === plant}
                onKeyPress={onEnter}
              />
              {plant}
            </label>
          ))}
        </div>
        {alert && <Alert />}
        <div className='button-container'>
          <button
            className='form-button'
            type='button'
            onClick={onPreviousQuestionChange}
          >
            Back
          </button>
          <button className='form-button' type='button' onClick={onStepChange}>
            Next
          </button>
        </div>
        <div className='progress-counter'>
          {step <= 5 && <p>Question: {step}/5</p>}
        </div>
      </form>
    </div>
  );
};

export default QuestionFour;
