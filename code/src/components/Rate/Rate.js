import React from 'react';

export const Rate = ({ rate, setRate, step }) => {
  const handleRateChange = (event) => {
    setRate(event.target.value);
  }
  return (
    <div className="rate-container">
      <h2>Question {step}</h2>
      <p>Last question, on a scale of 1 to 10, how would you rate your interaction with us?</p>
      <input
        type="range"
        id="rate-slider"
        name="rate"
        min="1"
        max="10"
        value={rate}
        onChange={handleRateChange} />
    </div>
  );
};