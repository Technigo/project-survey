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
          Preferred name:{' '}
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

      <div className='progress-bar'>
        <h3 className='progress-bar-heading'>Progress</h3>
        <ProgressBar bgcolor='orange' progress='0' height={20} />
      </div>
    </div>
  );
};

export default QuestionOne;
