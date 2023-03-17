import React from 'react';

const climateTypes = ['cold and snowy ☃️', 'warm and breezy 🌤️', 'hot and tropical 🏝️'];

export const Climate = ({ climate, setClimate, handleStepIncrease, handleStepDecrease }) => {
  // const handleClimateChange = (event) => {
  //   setClimate(event.target.value);
  // }
  return (
    <div className="questionWrapper">
      <h3>What kind of climate is most appealing to you?</h3>
      <div className="range">
        {climateTypes.map((climates) => (
          <label className="radioButtons" key={climates.id} htmlFor="radio">
            <input
              type="radio"
              value={climates}
              key={climate.id}
              onChange={(e) => setClimate(e.target.value)}
              checked={climate === climates} />
            {climates}
          </label>
        ))}
      </div>
      <div className="buttonContainer">
        <button type="button" className="buttonBack" onClick={handleStepDecrease}>Back</button>
        <button type="button" className="buttonNext" onClick={handleStepIncrease}>Next</button>
      </div>
    </div>
  );
}
