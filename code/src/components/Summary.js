import React from 'react';

const Summary = ({ nameInput, locationInput, newsInput, ageInput }) => {
  return (
    <div className="summary">
      <h2>Here is a summary of your answers:</h2>
      <ul>
        <li>Name: {nameInput}</li>
        <li>Location: {locationInput}</li>
        <li>Newsletter: {newsInput}</li>
        <li>Age: {ageInput}</li>
      </ul>
      <p className="submitAnswer">Click the button below to submit your answers.</p>
    </div>
  )
};

export default Summary;