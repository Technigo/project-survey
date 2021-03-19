import React from 'react';
import './ProgressBar.css'
const ProgressBar = ({progress}) => {
  const progressPercent = progress*20
  const progressText = () =>{
    if(progressPercent===0){return ""}
    else {
      return `${progressPercent}%`
    }
  }
  if(progress === 0) {
    return ""
  }
  else {
  return (
    <div>
      <div className="progress-range-wrapper" aria-label="Remaining questions progress visualisation">
        <div className="progress-bar" style={{ width: `${progressPercent}%`}}>
          <p className="progress-bar-text">{progressText()}</p>
        </div>
      </div>
    </div>
  )
}
}

export default ProgressBar