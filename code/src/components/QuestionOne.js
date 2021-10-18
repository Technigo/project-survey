import React from 'react';

const QuestionOne = ({ nameInput, onNameInputChange, onStepChange }) => {
  // const { nameInput, onNameInputChange } = props;
  return (
    <div className='form-question'>
      <form>
        <label htmlFor='nameInput'>Preferred name: </label>
        <input
          id='nameInput'
          type='text'
          value={nameInput}
          onChange={onNameInputChange}
        />
        <button className='form-button' type='submit' onClick={onStepChange}>
          Next question
        </button>
      </form>
    </div>
  );
};

export default QuestionOne;
