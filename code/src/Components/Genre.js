/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../index.css';

export const Genre = ({ step, genre, setGenre, handleStepIncrease }) => {
  const handleGenreChange = (event) => {
    setGenre(event.target.value)
  }
  console.log(step)
  return (
    <>
      <form>
        <p>Which of the following genres do you prefer?</p>
        <label>
          <input
            type="radio"
            value="alternative"
            // eslint-disable-next-line arrow-parens
            onChange={handleGenreChange}
            checked={genre === 'alternative'} />
          <span>Alternative</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="R&B"
            onChange={handleGenreChange}
            checked={genre === 'R&B'} />
          <span>R&B</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="house"
            onChange={handleGenreChange}
            checked={genre === 'house'} />
          <span>House</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="pop"
            onChange={handleGenreChange}
            checked={genre === 'pop'} />
          <span>Pop</span>
        </label>
      </form>
      <button
        className="nextBtn button"
        disabled={genre === ''}
        onClick={handleStepIncrease}>Next
      </button>
    </>
  );
};