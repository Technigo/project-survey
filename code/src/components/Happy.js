/* eslint-disable linebreak-style */
import React from 'react';

export const Happy = ({ happy, setHappy }) => {
  const handleHappyChange = (event) => {
    setHappy(event.target.value);
  }
  return (
    <div>
      <p>On a range from 0 to 100 percent, how happy are you feeling today?</p>
      <input
        type="range"
        min="0"
        max="100"
        value={happy}
        onChange={handleHappyChange} />
    </div>
  );
}