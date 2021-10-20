import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar-container">
      <div className="current-progress" style={{width: `${progress}`}}>
        <span className="progress-%">{Math.round(progress)}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
