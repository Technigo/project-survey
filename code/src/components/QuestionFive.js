import React from 'react';

import Alert from './Alert';

const QuestionFive = ({
  onStepChange,
  sliderInput,
  onSliderInputChange,
  alert,
  onEnter,
  onPreviousQuestionChange,
  step,
}) => {
  return (
    <div className='form-container'>
      <form className='form-question'>
        <label className='label-text' htmlFor={sliderInput}>
          How many plants do you have?
          <input
            type='range'
            min='1'
            max='3'
            value={sliderInput}
            onChange={onSliderInputChange}
            className='slider'
            id={sliderInput}
            required
            onKeyPress={onEnter}
          />
          <div className='slider-text'>
            <div>0</div>
            <div>10-ish</div>
            <div>100</div>
          </div>
        </label>
        {alert && <Alert />}
        <div className='button-container'>
          <button
            className='form-button'
            type='button'
            onClick={onPreviousQuestionChange}
          >
            Back
          </button>
          <button className='form-button' type='sumbit' onClick={onStepChange}>
            Submit
          </button>
        </div>
        <div className='progress-counter'>
          {step <= 5 && <p>Question: {step}/5</p>}
        </div>
      </form>
    </div>
  );
};

export default QuestionFive;
