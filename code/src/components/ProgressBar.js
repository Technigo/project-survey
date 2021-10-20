import React from "react";

const ProgressBar = ({ done }) => {
  return (
    <>
      <div className="progress-container">
        <progress
          htmlFor="progressBar"
          className="progress-bar"
          value={done}
          max="100"
        />
        <label className="label-progressBar" id="progressBar">
          {done}%
        </label>
        {/* <button className="link-button" onClick={onUpdateValueChange}></button> */}
      </div>
    </>
  );
};

export default ProgressBar;
