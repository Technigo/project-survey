import React from 'react';

const WaistQuestion = ({
  waistInput,
  onWaistInputChange,
  onStepChange,
  onEnter
}) => {
  return (
    <div className='form-container'>
      <form>
        <label htmlFor={waistInput}>Type your waist measurement in cm</label>
        <input
          id='waistInput'
          type='text'
          value={waistInput}
          onChange={onWaistInputChange}
          onKeyPress={onEnter}
        />
        <button type='button' onClick={onStepChange}>
          Next questions
        </button>
      </form>
    </div>
  );
};

export default WaistQuestion;
