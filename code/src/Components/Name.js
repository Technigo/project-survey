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
        <h2>Hello there! </h2>
        <p>
          Are you on the lookout for new music? Are you perhaps interested in learning more
          about West African (mainly Nigerian and Ghanaian) popular music?
          If so, then you have come to the right place! This short quiz will match you with
          one of four playlists that have been curated according to your musical preferences.
        </p>
        <p>
          Let's begin! What is your name?
        </p>
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