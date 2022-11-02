import React from 'react';

export const WhatKinde = ({ whatKinde, setWhatKinde }) => {
  return (
    <div className="survey-item what-kinde">
      <label className="section-heading" htmlFor="whatKinde">How do you prefer your coffee?
        <select
          onChange={(event) => setWhatKinde(event.target.value)}
          id="whatKinde"
          value={whatKinde}>
          <option>Select below</option>
          <option>black as tar</option>
          <option>spoon standing straight up!</option>
          <option>with milk</option>
          <option>with A LOT OF milk</option>
          <option>with milk and sugar</option>
          <option>as a fancy coffee drink</option>
          <option>with any type of alcohol</option>
        </select>
      </label>
    </div>
  );
};
