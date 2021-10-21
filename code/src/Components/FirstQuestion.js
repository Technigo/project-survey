import React from 'react';

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) =>
  // or: const { nameInput, onNameInputChange } = props
  {
    return (
      <form>
        <label htmlFor="nameInput">Type your name: </label>
        <input
          id="nameInput"
          type="text"
          value={nameInput}
          onChange={onNameInputChange}
          placeholder="First and last"
        />
        <button disabled={nameInput === ''} onClick={onStepChange}>
          Next question
        </button>
      </form>
    );
  };

export default FirstQuestion;
