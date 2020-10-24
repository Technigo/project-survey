import React from "react";

const Question1 = ({ city, onCityChange }) => {
  return (
    <div className="question-2">
      <h3>Where would you like to train?</h3>
      <select value={city} onChange={onCityChange} required>
        <option value="">Choose city...</option>
        <option value="stockholm">Stockholm</option>
        <option value="göteborg">Göteborg</option>
        <option value="malmö">Malmö</option>
      </select>
    </div>
  );
};
export default Question1;
