import React from 'react';

const AgeQuestion = ({ ageInput, onAgeInputChange, onStepChange, onEnter }) => {
  return (
    <div className='form-container'>
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
    </div>
  );
};

export default AgeQuestion;
