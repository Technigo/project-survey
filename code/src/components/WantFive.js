import React from 'react';
// Range input - a scale from 0-10 with one step/number
export const WantFive = ({ want, setWant }) => {
  const handleWantChange = (event) => {
    setWant(event.target.value);
  }
  return (
    <form>
      <h2>Do you want to use a bike more than you do today?</h2>
      <label htmlFor="wantIt"> Not at all.
        <input
          className="inputClass"
          id="wantIt"
          type="range"
          min="0"
          max="10"
          step="1"
          onChange={handleWantChange}
          Value={want} />
        Yes, alot!
      </label>
    </form>
  )
}