import React from 'react';

import ProgressBar from '@ramonak/react-progress-bar';

const HeightQuestion = ({
  heightInput,
  onHeightInputChange,
  onStepChange,
  onEnter,
  step
}) => {
  return (
    <div className='form-container'>
      <form>
        <label htmlFor={heightInput}>
          Type your height in meters (use period)
        </label>
        <input
          id='heightInput'
          type='number'
          value={heightInput}
          onChange={onHeightInputChange}
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

export default HeightQuestion;
