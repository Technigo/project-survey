/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Result = ({ name, love, favorite, handleRestartSurvey }) => {
  return (
    <div className="survey-summary">
      <h3>Survey Summary</h3>
      <p>Name: {name}</p>
      <p>Do you love cats? {love}</p>
      <p>Your favorite cartoon cat is {favorite}.</p>
      <button type="button" onClick={handleRestartSurvey}>Restart</button>
    </div>
  );
}

export default Result;