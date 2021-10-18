import React from 'react';

const QuestionOne = ({ nameInput, onNameInputChange, onStepChange }) => {
  // const { nameInput, onNameInputChange } = props;
  return (
    <form>
      <label htmlFor='nameInput'>Preferred name: </label>
      <input
        id='nameInput'
        type='text'
        value={nameInput}
        onChange={onNameInputChange}
      />
      <button type='submit' onClick={onStepChange}>
        Next question
      </button>
    </form>
  );
};

export default QuestionOne;
