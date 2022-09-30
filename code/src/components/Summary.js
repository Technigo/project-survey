/* eslint-disable max-len */
import React from 'react';

const Summary = ({ questionOne, questionTwo, name, characterGroup, workAlternative, bossMeme, questionThree }) => {
  return (
    <div className="summary-container">
      <h2 className="question">Here you find your preferences at work in our company!</h2>
      <p className="summary-answer">Your name is: {name}</p>
      <p className="summary-answer">You would like to work with: {characterGroup} {questionOne}</p>
      <p className="summary-answer">Your favorit place to work: {workAlternative} {questionTwo}</p>
      <p className="summary-answer">Your Boss is number: {bossMeme} {questionThree}</p>
      <h2 className="end">Thanks for your answers! We will soon start to provide a better work environment!</h2>
    </div>
  );
}

export default Summary;