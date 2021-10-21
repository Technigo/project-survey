import React from 'react';

const HeightQuestion = ({
  heightInput,
  onHeightInputChange,
  onStepChange,
  onEnter
}) => {
  return (
    <div className='form-container'>
      <form>
        <label htmlFor={heightInput}>Type your height in meters</label>
        <input
          id='heightInput'
          type='text'
          value={heightInput}
          onChange={onHeightInputChange}
          onKeyPress={onEnter}
        />
        <button type='button' onClick={onStepChange}>
          Next questions
        </button>
      </form>
    </div>
  );
};

export default HeightQuestion;
