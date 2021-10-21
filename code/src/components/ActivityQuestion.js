import React from 'react';

const steps = ['>5,000 steps', '7,500 steps', '10,000 steps', '12,500 steps'];

const ActivityQuestion = ({
  activityInput,
  onActivityInputChange,
  onStepChange,
  onEnter
}) => {
  return (
    <div className='form-container'>
      <form className='radio-form'>
        <h2>How much steps do you take in a day?</h2>
        {steps.map((step) => (
          <label key={step} htmlFor={step}>
            <input
              id={step}
              className='radio-input'
              type='radio'
              value={step}
              onChange={onActivityInputChange}
              checked={activityInput === step}
              onKeyPress={onEnter}
            />
            {step}
          </label>
        ))}
        <button type='button' onClick={onStepChange}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default ActivityQuestion;
