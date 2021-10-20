import React from 'react';

import ProgressBar from '@ramonak/react-progress-bar';

const NameQuestion = ({
  nameInput,
  onNameInputChange,
  onStepChange,
  onEnter,
  step
}) => {
  return (
    <div className='form-container'>
      <form>
        <label htmlFor='nameInput'>Type your name:</label>
        <input
          id='nameInput'
          type='text'
          value={nameInput}
          onChange={onNameInputChange}
          onKeyPress={onEnter}
        />
        <button
          type='button'
          onClick={onStepChange}
          disabled={nameInput === ''}
        >
          Next questions
        </button>
      </form>
      <div className='progress-bar'>
        <ProgressBar completed={step * 10} />
      </div>
    </div>
  );
};

export default NameQuestion;
