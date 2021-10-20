import React from 'react';
import './OtherQuestion.css';

const OtherQuestion = ({ onStepChange }) => {
  return (
    <div className='form-container'>
      <form>
        <input
          type='range'
          min='1'
          max='100'
          value=''
          className='slider'
          id='myRange'
        />
        <button type='button' onClick={onStepChange}>
          Next question
        </button>
      </form>
    </div>
  );
};

export default OtherQuestion;
