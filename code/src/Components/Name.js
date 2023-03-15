/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../index.css';

export const Name = ({ step, name, setName, handleStepIncrease }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  console.log(step);

  return (
    <div>
      <form>
        <p>Let's begin! What is your name?</p>
        <span className="questionTitle">Name: </span><input
          type="text"
          value={name}
          onChange={handleNameChange}
          required />
      </form>
      <button
        className="nextBtn button"
        disabled={name === ''}
        onClick={handleStepIncrease}>Next
      </button>
    </div>
  );
};