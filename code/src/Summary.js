import React from 'react';

export const Summary = ({ name, location, ageGroup, happiness }) => {
  return (
    <div className="summary-content">
      <h1 tabIndex="0">Survey summary</h1>
      <p tabIndex="0">Thanks for your input {name}!</p>
      <p tabIndex="0">Last mountain you visit is: {location}</p>
      <p tabIndex="0">Your age is: {ageGroup} years old</p>
      <p tabIndex="0">Happiness level: {happiness}</p>
    </div>
  );
};
