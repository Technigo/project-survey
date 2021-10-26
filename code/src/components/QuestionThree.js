import React from 'react';

import Alert from './Alert';

const humidityArray = ['60%', '90%', 'No idea'];

const QuestionThree = ({
  humidity,
  onHumidityChange,
  alert,
  onStepChange,
  onEnter,
  onPreviousQuestionChange,
  step,
}) => {
  return (
    <div className='form-container'>
      <form className='form-question'>
        <label className='label-text'>What is your indoor humidity?</label>
        <div className='radio-button-container'>
          {humidityArray.map((value) => (
            <label
              className='radio-option-humidity'
              key={value}
              htmlFor='humidity'
            >
              <input
                type='radio'
                id={humidity}
                value={value}
                onChange={onHumidityChange}
                checked={humidity === value}
                onKeyPress={onEnter}
              />
              {value}
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

export default QuestionThree;
