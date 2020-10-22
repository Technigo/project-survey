import React from 'react';

const ProgressBar = ({ className, progress, maxProgress }) => {
  return (
    <>
      <label className={className} htmlFor="ProgressBar">
        {progress} / {maxProgress}
      </label>
      <progress
        className="className"
        name="ProgressBar"
        value={progress}
        max={maxProgress}
      ></progress>
    </>
  );
};

export default ProgressBar;
