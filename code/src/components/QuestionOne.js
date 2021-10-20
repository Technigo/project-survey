import React from 'react';

import ProgressBar from './ProgressBar';
import Alert from './Alert';

const QuestionOne = ({
  nameInput,
  onNameInputChange,
  onStepChange,
  onEnter,
  alert,
}) => {
  return (
    <div className='form-question'>
      <form>
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
      </form>

      <ProgressBar bgcolor='orange' progress='25' height={20} />
    </div>
  );
};

export default QuestionOne;
