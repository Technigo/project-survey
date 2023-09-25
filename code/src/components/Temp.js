import React from 'react';

export const Temp = ({ temp, setTemp, step }) => {
  let tempText = '';
  switch (temp) {
    case '0':
      tempText = 'Freezing 🥶';
      break;
    case '10':
      tempText = 'Chilly 🌨';
      break;
    case '20':
      tempText = 'Neutral 😐';
      break;
    case '30':
      tempText = 'Warm ☀️';
      break;
    case '40':
      tempText = 'Hot 🥵';
      break;
    case '50':
      tempText = 'Extremely Hot 🔥';
      break;
    default:
      tempText = 'Drag the slider to desired temp';
  }
  return (
    <form className="content-container">
      <div className="head">
        <p className="p-step">Current step: {step} / 7</p>
      </div>
      <div className="content-container">
        <h4>What is your prefered temperature?</h4>
        <p>{tempText}</p>
        <label htmlFor="temperature">
          <input
            type="range"
            id="temperature"
            min="0"
            max="50"
            step="10"
            value={temp}
            onChange={(event) => setTemp(event.target.value)} />
        </label>
      </div>
    </form>
  );
};