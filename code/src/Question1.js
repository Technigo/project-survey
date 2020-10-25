import React from "react";

const Question1 = ({ city, onCityChange }) => {
  return (
    <section className="question-1">
      <select value={city} onChange={onCityChange} required>
        <option value="">Choose city...</option>
        <option value="Stockholm">Stockholm</option>
        <option value="Göteborg">Göteborg</option>
        <option value="Malmö">Malmö</option>
      </select>
    </section>
  );
};
export default Question1;
