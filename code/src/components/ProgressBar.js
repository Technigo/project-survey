import React from 'react';

export const ProgressBar = ({ currentStep, totalSteps }) => {
  const percentComplete = Math.floor((currentStep / totalSteps) * 100);
  return (
    <div>
      <p>Progress: {percentComplete}% complete</p>
      <div style={{ backgroundColor: 'white', height: 10 }}>
        <div style={{ backgroundColor: 'purple', height: 10, width: `${percentComplete}%` }} />
      </div>
    </div>
  );
};
