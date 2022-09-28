import React from 'react';

export const WantFive = ({ want, setWant }) => {
  const handleWantChange = (event) => {
    setWant(event.target.value);
  }
  return (
    <form>
      <p>Do you want to use a bike more than you do today?</p>
      <label htmlFor="wantIt"> Not at all.
        <input
          id="wantIt"
          type="range"
          min="0"
          max="10"
          step="1"
          onChange={handleWantChange}
          Value={want} />
        Yes, very much.
      </label>
    </form>
  )
}