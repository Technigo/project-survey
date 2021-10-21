import React from 'react';

import Alert from './Alert';

const plantsArray = ['🌴', '🌷', '🌻', '🎄'];

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
        <label className='label-text'>What is you favourite plant?</label>
        <div className='radio-button-container'>
          {plantsArray.map((plant) => (
            <label className='radio-option-plant' key={plant}>
              <input
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
            Submit
          </button>
        </div>
        <div className='progress-counter'>
          {step <= 4 && <p>Question: {step}/4</p>}
        </div>
      </form>
    </div>
  );
};

export default QuestionFour;
