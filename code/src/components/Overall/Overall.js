import React from 'react';

export const Overall = ({ overall, setOverall, step }) => {
  const handleOverallChange = (event) => {
    setOverall(event.target.value);
  }
  return (
    <div className="overall-container">
      <h2>Question {step}</h2>
      <p>What is your overall perception of us?</p>
      <input type="text" value={overall} onChange={handleOverallChange} />
    </div>
  );
};