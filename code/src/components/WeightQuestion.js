import React from 'react';

import ProgressBar from '@ramonak/react-progress-bar';

const WeightQuestion = ({
  weightInput,
  onWeightInputChange,
  onStepChange,
  onEnter,
  step
}) => {
  return (
    <div className='form-container'>
      <form>
        <label htmlFor={weightInput}>What is your weight in kg?</label>
        <input
          id='weightInput'
          type='number'
          value={weightInput}
          onChange={onWeightInputChange}
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

export default WeightQuestion;
