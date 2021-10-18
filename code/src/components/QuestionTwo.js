import React from 'react';

const QuestionTwo = ({ surnameInput, onSurnameInputChange, onStepChange }) => {
  // const { nameInput, onNameInputChange } = props;
  return (
    <form>
      <label htmlFor='surnameInput'>Preferred surname: </label>
      <input
        id='surnameInput'
        type='text'
        value={surnameInput}
        onChange={onSurnameInputChange}
      />
      <button type='submit' onClick={onStepChange}>
        Next question
      </button>
    </form>
  );
};

export default QuestionTwo;
