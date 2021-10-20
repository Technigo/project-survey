import React from 'react';

const FourthQuestion = ({ willDoInput, onWillDoInputChange, onStepChange }) => {
  return (
    <form>
      <label htmlFor="willDoInput">What will you do today: </label>
      <textarea
        id="willDoInput"
        rows="4"
        cols="50"
        value={willDoInput}
        onChange={onWillDoInputChange}
        placeholder="Describe what you are planning to do"
      />
      <button disabled={willDoInput === ''} onClick={onStepChange}>
        Next question
      </button>
    </form>
  );
};

export default FourthQuestion;
