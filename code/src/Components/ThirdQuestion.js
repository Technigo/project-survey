import React from 'react';

const ThirdQuestion = ({ doneInput, onDoneInputChange, onStepChange }) => {
  return (
    <form>
      <label htmlFor="doneInput">What did you accomplished yesterday: </label>
      <textarea
        id="doneInput"
        rows="4"
        cols="50"
        value={doneInput}
        onChange={onDoneInputChange}
        placeholder="Describe what you have been doing since last standup"
      />
      <button disabled={doneInput === ''} onClick={onStepChange}>
        Next question
      </button>
    </form>
  );
};

export default ThirdQuestion;
