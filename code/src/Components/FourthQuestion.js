import React from 'react';

const FourthQuestion = ({ willDoInput, onWillDoInputChange, onStepChange }) => {
  return (
    <form className="form">
      <label>
        What will you do today:
        <textarea
          id="willDoInput"
          rows="4"
          cols="50"
          value={willDoInput}
          onChange={onWillDoInputChange}
          placeholder="Describe what you are planning to do"
        />
      </label>
      <button
        className="button"
        disabled={willDoInput === ''}
        onClick={onStepChange}
      >
        Next question
      </button>
    </form>
  );
};

export default FourthQuestion;
