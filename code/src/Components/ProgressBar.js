import React from "react";

const ProgressBar = ({step}) => {
  let completed = (step * 100) /7;
  const progressStatus = {
    width: `${completed}%`,
  };
  return (
    <div className="progress-b-outer-container">
      <div className="progress-b-inner-container" style={progressStatus}></div>
    </div>
  );
};

export default ProgressBar;