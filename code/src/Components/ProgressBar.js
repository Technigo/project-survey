import React from "react";

const ProgressBar = ({step}) => {
  let completed = (step * 100) /5;
  const progressStatus = {
    width: `${completed}%`,
  };
  return (
    <div className="progress-b-outer-container">
      <span class="sr-only">Progressbar. The progress in the survey is currently {completed} % completed</span>
      <div className="progress-b-inner-container" style={progressStatus}></div>
    </div>
  );
};

export default ProgressBar;