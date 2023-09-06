/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../index.css';

export const Feel = ({ step, feel, setFeel, handleStepIncrease }) => {
  const handleFeelChange = (event) => {
    setFeel(event.target.value)
  }
  console.log(step)
  return (
    <>
      <form>
        <p>What "feel" of music suits your fancy?</p>
        <label>
          <input
            type="radio"
            value="experimental and unique"
            // eslint-disable-next-line arrow-parens
            onChange={handleFeelChange}
            checked={feel === 'experimental and unique'} />
          <span>Experimental & unique</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="classic and established"
            onChange={handleFeelChange}
            checked={feel === 'classic and established'} />
          <span>Classic & established</span>
        </label>
      </form>
      <button
        className="nextBtn button"
        disabled={feel === ''}
        onClick={handleStepIncrease}>Next
      </button>
    </>
  );
};