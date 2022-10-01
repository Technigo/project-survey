import React from 'react';

export const WhatKinde = ({ whatKinde, setWhatKinde }) => {
  return (
    <div className="survey-item what-kinde">
      <label className="section-heading">
        How do you preffere your coffee?
      </label>
      <select
        onChange={(event) => setWhatKinde(event.target.value)}
        id="whatKinde"
        value={whatKinde}
      >
        <option disabled>Select below</option>
        <option>black as tar</option>
        <option>spoon standing straight up!</option>
        <option>with milk</option>
        <option>with A LOT OF milk</option>
        <option>with milk and sugar</option>
        <option>fancy coffee drink</option>
        <option>with any alcohol</option>
      </select>
    </div>
  );
};
