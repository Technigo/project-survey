import React from 'react';
import './progressbar.css'

export const ProgressBar = ({ currentStep, totalSteps }) => {
  // const percentageDone = Math.floor((currentStep / totalSteps) * 100);
  return (
    <div className="progress-bar">
      <div className="bar" style={{ width: `${(currentStep / totalSteps) * 100}%` }} />
    </div>
  )
}