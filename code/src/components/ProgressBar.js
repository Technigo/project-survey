import React from 'react';

const ProgressBar = ({ classLabel, progress, maxProgress, classProgress }) => {
  return (
    <>
      <label className={classLabel} htmlFor="ProgressBar">
        {progress} / {maxProgress}
      </label>
      <progress
        className={classProgress}
        name="ProgressBar"
        value={progress}
        max={maxProgress}
      ></progress>
    </>
  );
};

export default ProgressBar;
