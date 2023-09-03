import React from 'react';

const ProgressBar = ({ step }) => {
  return (
    <progress id="progress" className="progress" aria-label="Survey progress" value={step} aria-valuemin="0" aria-valuenow="0" aria-valuemax="5" max="5" />
  )
}

export default ProgressBar;