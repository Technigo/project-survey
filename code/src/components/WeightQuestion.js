import React from 'react';

const WeightQuestion = ({
  weightInput,
  onWeightInputChange,
  onStepChange,
  onEnter
}) => {
  return (
    <div className='form-container'>
      <form>
        <label htmlFor={weightInput}>What is your weight in kg?</label>
        <input
          id='weightInput'
          type='text'
          value={weightInput}
          onChange={onWeightInputChange}
          onKeyPress={onEnter}
        />
        <button type='button' onClick={onStepChange}>
          Next questions
        </button>
      </form>
    </div>
  );
};

export default WeightQuestion;
