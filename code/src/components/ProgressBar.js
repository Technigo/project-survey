import React from 'react';

const ProgressBar = ({ className, progressText, progress, maxProgress }) => {
  return (
    <>
      {/* <label className={className} htmlFor="ProgressBar">
        {progressText}
      </label> */}
      <progress
        className="className"
        name="ProgressBar"
        value={progress}
        max={maxProgress}
      ></progress>
      <output name="output">{progress}</output>
    </>
  );
};

export default ProgressBar;
