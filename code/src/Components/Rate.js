import React from 'react';

export const Rate = ({ rate, setRate }) => {
  const handleRateChange = (event) => {
    setRate(event.target.value);
  }
  return (
    <div className="outerWrapper">
      <div className="questionContainer">
        <img className="questionImage" alt="coffee" src="https://images.unsplash.com/photo-1463740839922-2d3b7e426a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2500&q=80" />
        <p>On a scale from 1 to 10, how much do you love breakfast?</p>
        <input
          className="slider"
          type="range"
          id="rateInput"
          name="rate"
          min="1"
          max="10"
          step="1"
          value={rate}
          defaultValue="5"
          onChange={handleRateChange} />
        <p className="rangeSliderValue">{rate}</p>
      </div>
    </div>
  );
}