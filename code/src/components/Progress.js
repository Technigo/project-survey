import React from "react";

const Progress = ({ progress }) => {
  return (
    <div className="progress-wrapper">
      <label className="progress-text" htmlFor="progress">
        Completed:
      </label>
      <progress
        className="progress-bar"
        id="file"
        value={progress * 25}
        max="100"
      >
        Value %
      </progress>
    </div>
  );
};

export default Progress;
