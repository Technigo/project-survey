import React from 'react';

const ProgressBar = ({progress}) => {
  return (
    <div>
      <div className="progress-range-wrapper">
        <div className="progress-bar" style={{ width: `${progress}%`}}></div>
      </div>
      <p> Here is progress: {progress}</p>
    </div>
  )
}

export default ProgressBar