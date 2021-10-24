import React from 'react';

const DoneQuestion = ({ doneInput, onDoneInputChange, onStepChange }) => {
  return (
    <form className="form">
      <label>
        What did you accomplished yesterday:
        <textarea
          id="doneInput"
          rows="4"
          cols="30"
          value={doneInput}
          onChange={onDoneInputChange}
          placeholder="Describe what you have been doing since last standup"
        />
      </label>
      <button
        className="button"
        disabled={doneInput === ''}
        onClick={onStepChange}
      >
        Next question
      </button>
    </form>
  );
};

export default DoneQuestion;
