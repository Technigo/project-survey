import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ done }) => {
  const ProgressContainer = {
    height: 40,
    width: "100%",
  };

  const ProgressBar = {
    height: "100%",
    width: `${done}%`,
  };

  return (
    <>
      <div className="progress-container" style={ProgressContainer}>
        <div className="progress-bar" style={ProgressBar}>
          {done}%
        </div>
        {/* <label className="label-progressBar" id="progressBar">
          
        </label> */}
      </div>
    </>
  );
};

export default ProgressBar;
