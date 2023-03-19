import React from 'react';

export const Rate = ({ rate, setRate, step, handleStepIncrease }) => {
  const handleRateChange = (event) => {
    setRate(event.target.value);
  }

  const handleNextButtonClick = () => {
    if (!rate) {
      alert('Please select a rating.');
    } else {
      handleStepIncrease();
    }
  }

  return (
    <div className="rate-container">
      <img src="/images/fashion.jpg" alt="fashion clothing" className="fashion-image" />
      <div className="right-container">
        <div className="rate-header">
          <h2>Question {step}</h2>
          <p>Last question, on a scale of 1 to 10, how would you rate your interaction with us?</p>
        </div>
        <div className="rate-slider">
          <span>1</span>
          <input
            type="range"
            id="rate-slider"
            name="rate"
            min="1"
            max="10"
            value={rate}
            onChange={handleRateChange} />
          <span>10</span>
        </div>
        <button type="button" onClick={handleNextButtonClick} required>Next</button>
      </div>
    </div>
  );
};
