import React from 'react';
import './ProgressBar.css'

export const ProgressBar = ({ currentStep, totalSteps }) => {
  const percentComplete = Math.floor((currentStep / totalSteps) * 100);
  return (
    <div>
      <p>Progress: {percentComplete}% complete</p>
      <div className="barbackground" style={{ height: 10 }}>
        <div className="bar" style={{ height: 10, width: `${percentComplete}%` }} />
      </div>
    </div>
  );
};

