import React from 'react';

const ProgressBar = ({progress}) => {
  return (
    <div>
      <div className="progress-range-wrapper">
        <div className="progress-bar" style={{ width: `${progress}%`}}></div>
      </div>
    </div>
  )
}

export default ProgressBar