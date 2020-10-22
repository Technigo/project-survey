import React from 'react';

export const Summary = ({ name, location, ageGroup, happiness }) => {
  return (
    <div className="summary-content">
      <h1>Survey summary</h1>
      <p>Thanks for your input {name}!</p>
      <p>Last mountain you visit is: {location}</p>
      <p>Your age is: {ageGroup} years old</p>
      <p>Happiness level: {happiness}</p>
    </div>
  );
};
