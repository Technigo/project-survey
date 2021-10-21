import React from 'react';

import ProgressBar from '@ramonak/react-progress-bar';

const steps = ['>5,000 steps', '7,500 steps', '10,000 steps', '12,500 steps'];

const ActivityQuestion = ({
  activityInput,
  onActivityInputChange,
  onStepChange,
  onEnter,
  step
}) => {
  return (
    <div className='form-container'>
      <form className='radio-form'>
        <h2>How much steps do you take in a day?</h2>
        {steps.map((stepping) => (
          <label key={step} htmlFor={stepping}>
            <input
              id={stepping}
              className='radio-input'
              type='radio'
              value={stepping}
              onChange={onActivityInputChange}
              checked={activityInput === stepping}
              onKeyPress={onEnter}
            />
            {stepping}
          </label>
        ))}
        <button type='button' onClick={onStepChange}>
          Submit
        </button>
      </form>
      <div className='progress-bar'>
        <ProgressBar completed={step * 10} />
      </div>
    </div>
  );
};
export default ActivityQuestion;
