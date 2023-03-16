/* eslint-disable react/button-has-type */
import React from 'react';
import '../index.css';

export const Reason = ({ step, name, reason, setReason, handleStepIncrease }) => {
  const handleReasonSelect = (event) => {
    setReason(event.target.value)
  }
  console.log(step);
  return (
    <div>
      <form>
        <p>Hi there, {name}! What kind of musical tempo do you enjoy?
       For what reason do you like to listen to music?
        </p>
        <select
          onChange={handleReasonSelect}
          value={reason}>
          <option value="">Choose here:</option>
          <option value="unwind">Slow- to mid-tempo. I listen to music to unwind.</option>
          <option value="turn up">Mid- to high-tempo. I listen to music to turn up!</option>
        </select>
      </form>
      <button
        className="nextBtn button"
        disabled={reason === ''}
        onClick={handleStepIncrease}>Next
      </button>
    </div>
  );
};