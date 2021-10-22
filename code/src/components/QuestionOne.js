import React from 'react';

import Alert from './Alert';

const QuestionOne = ({
  nameInput,
  onNameInputChange,
  onStepChange,
  onEnter,
  alert,
  step,
}) => {
  return (
    <div className='form-container'>
      <form className='form-question'>
        <label className='label-text' htmlFor='nameInput'>
          What is your name?{' '}
        </label>
        <input
          id='nameInput'
          type='text'
          placeholder='Your name goes here'
          value={nameInput}
          onChange={onNameInputChange}
          onKeyPress={onEnter}
        />
        {alert && <Alert />}
        <button className='form-button' type='button' onClick={onStepChange}>
          Next
        </button>
        <div className='progress-counter'>
          {step <= 5 && <p>Question: {step}/5</p>}
        </div>
      </form>
    </div>
  );
};

export default QuestionOne;
