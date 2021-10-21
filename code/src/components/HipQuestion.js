import React from 'react';

import ProgressBar from '@ramonak/react-progress-bar';

const HipQuestion = ({
  hipInput,
  onHipInputChange,
  onStepChange,
  onEnter,
  step
}) => {
  return (
    <div className='form-container'>
      <form>
        <label htmlFor={hipInput}>Type your hip measurement in cm</label>
        <input
          id='hipInput'
          type='number'
          value={hipInput}
          onChange={onHipInputChange}
          onKeyPress={onEnter}
        />
        <button type='button' onClick={onStepChange}>
          Next questions
        </button>
      </form>
      <div className='progress-bar'>
        <ProgressBar completed={step * 10} />
      </div>
    </div>
  );
};

export default HipQuestion;
