import React from 'react';

export const Progress = ({ step }) => {
  return <footer className="progress-bar">
    <label htmlFor="progress"> {step === 4 ? 'completed' : `question ${step}/4`} </label>
    <progress
      id="progress"
      tabIndex="-1"
      max="4"
      value={step} />
  </footer>
}

