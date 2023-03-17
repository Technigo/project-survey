import React from 'react';

const climateTypes = ['cold and snowy ☃️', 'warm and breezy 🌤️', 'hot and tropical 🏝️'];

export const Climate = ({ climate, setClimate }) => {
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
    </div>
  );
}
