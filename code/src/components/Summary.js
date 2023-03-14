import React from 'react';

const Summary = ({ nameInput, locationInput, newsInput, ageInput }) => {
  return (
    <ul className="summary">
      <li>Name: {nameInput}</li>
      <li>Location: {locationInput}</li>
      <li>Newsletter: {newsInput}</li>
      <li>Age: {ageInput}</li>
    </ul>
  )
};

export default Summary;