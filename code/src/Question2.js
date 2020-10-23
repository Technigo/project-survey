import React from "react";

const Question2 = ({ city, onCityChange }) => {
  return (
    <select className="question-2" value={city} onChange={onCityChange}>
      <option value="">Choose city...</option>
      <option value="stockholm">Stockholm</option>
      <option value="barcelona">Barcelona</option>
      <option value="berlin">Berlin</option>
    </select>
  );
};
export default Question2;
