import React, { useState } from 'react';

const Name = ({ name, setName, counter, setCounter }) => {
  const [error, setError] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleIncreaseCounterClick = () => {
    if (name === '') {
      setError(true)
    } else {
      setCounter(counter + 1);
    }
  }

  return (
    <div className="survey-wrapper name">
      <h2><span>What is your name?</span></h2>
      <label htmlFor="nameInput">
        <input
          className="name-input"
          type="text"
          placeholder={!error ? 'Type your name here...' : '* Please enter your name'}
          value={name}
          id="nameInput"
          onChange={handleNameChange} />
      </label>
      <button
        type="button"
        onClick={handleIncreaseCounterClick}
        aria-label="Next button">
        Next
      </button>
    </div>
  );
}

export default Name
