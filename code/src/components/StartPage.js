import React from 'react';

const StartPage = ({ onStepChange }) => {
  return (
    <div>

      <h1>
      Welcome to the survey!
      </h1>
      <button className="button" onClick={onStepChange}>Start</button>
    </div>
  )
}

export default StartPage;