import React from 'react';

export const Summary = ({ name, location, ageGroup }) => {
  return (
    <div className="summary-content">
      <h1>Summary of the survey</h1>
      <p>Thanks for your input {name}!</p>
      <p>City where you took the course: {location}</p>
      <p>You belonged to age group: {ageGroup}</p>
    </div>
  );
};
