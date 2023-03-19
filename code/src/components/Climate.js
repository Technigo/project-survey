import React from 'react';

const climateTypes = ['cold and snowy ☃️', 'warm and breezy 🌤️', 'hot and tropical 🏝️'];

export const Climate = ({ climate, setClimate, handleStepIncrease, handleStepDecrease }) => {
  return (
    <div className="questionWrapper">
      <h3>What kind of climate is most appealing to you?</h3>
      <div className="radioButtons">
        {climateTypes.map((climates, index) => (
          <div key={climates}>
            <input
              id={`climate-${index}`}
              type="radio"
              value={climates}
              onChange={(e) => setClimate(e.target.value)}
              checked={climate === climates} />
            <label htmlFor={`climate-${index}`}>
              {climates}
            </label>
          </div>
        ))}
      </div>
      <div className="buttonContainer">
        <button type="button" className="buttonBack" onClick={handleStepDecrease}>Back</button>
        <button type="button" className="buttonNext" onClick={handleStepIncrease}>Next</button>
      </div>
    </div>
  );
}
