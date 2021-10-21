import React from 'react';

// import ProgressBar from './ProgressBar';
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
        {/* <ProgressBar bgcolor='orange' progress='0' height={20} /> */}
        <div className='progress-counter'>
          {step <= 4 && <p>Question: {step}/4</p>}
        </div>
      </form>
    </div>
  );
};

export default QuestionOne;
