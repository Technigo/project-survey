import React from 'react';

const HipQuestion = ({ hipInput, onHipInputChange, onStepChange, onEnter }) => {
  return (
    <div className='form-container'>
      <form>
        <label htmlFor={hipInput}>Type your hip measurement in cm</label>
        <input
          id='hipInput'
          type='text'
          value={hipInput}
          onChange={onHipInputChange}
          onKeyPress={onEnter}
        />
        <button type='button' onClick={onStepChange}>
          Next questions
        </button>
      </form>
    </div>
  );
};

export default HipQuestion;
