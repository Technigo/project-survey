import React from 'react';

const ProgressBar = ({
  firstDot,
  secondDot,
  thirdDot,
  fourthDot,
  fifthDot,
}) => {
  return (
    <div className="progress-bar__wrapper">
      <span className={firstDot}></span>
      <span className={secondDot}></span>
      <span className={thirdDot}></span>
      <span className={fourthDot}></span>
      <span className={fifthDot}></span>
    </div>
  );
};
export default ProgressBar;
