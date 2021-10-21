import React from 'react';

import ProgressBar from '@ramonak/react-progress-bar';

const AgeQuestion = ({
  ageInput,
  onAgeInputChange,
  onStepChange,
  onEnter,
  step
}) => {
  return (
    <div id='container' className='form-container'>
      <form>
        <label htmlFor={ageInput}>What&apos;s your age?</label>
        <input
          id='ageInput'
          type='text'
          value={ageInput}
          onChange={onAgeInputChange}
          onKeyPress={onEnter}
        />
        <button type='button' onClick={onStepChange} disabled={ageInput === ''}>
          Next questions
        </button>
      </form>
      <div className='progress-bar'>
        <ProgressBar completed={step * 10} />
      </div>
    </div>
  );
};

export default AgeQuestion;
