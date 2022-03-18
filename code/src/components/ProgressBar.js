import React from "react";

const ProgressBar = ({step}) => {
  const percentage = (step) => {
    if(step === 1) return 25;
    if(step === 2) return 50;
    if(step === 3) return 75;
    if(step === 4) return 100;
    return step;
  }
  
  return (
    <div className="progress-wrapper">
      <div className="progress-bar-full" style={{ width: "50%" }}>
        <div className="progress-bar-process" style={{ width:`${percentage(step)}%` }}></div>
      </div>
      <span className="small-text">step {step} out of 4</span>
    </div>
  )}


export default ProgressBar;