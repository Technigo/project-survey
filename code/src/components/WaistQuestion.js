import React from 'react';

import ProgressBar from '@ramonak/react-progress-bar';

const WaistQuestion = ({
  waistInput,
  onWaistInputChange,
  onStepChange,
  onEnter,
  step
}) => {
  return (
    <div className='form-container'>
      <form>
        <label htmlFor={waistInput}>Type your waist measurement in cm</label>
        <input
          id='waistInput'
          type='number'
          value={waistInput}
          onChange={onWaistInputChange}
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

export default WaistQuestion;
