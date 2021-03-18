import React from 'react';
import './ProgressBar.css'
const ProgressBar = ({progress}) => {
  
  const progressText = () =>{
    if(progress===0){return ""}
    else {
      return `${progress}%`
    }
  }
  if(progress === 0) {
    return ""
  }
  else {
  return (
    <div>
      <div className="progress-range-wrapper" aria-label="Remaining questions progress visualisation">
        <div className="progress-bar" style={{ width: `${progress}%`}}>
          <p className="progress-bar-text">{progressText()}</p>
        </div>
      </div>
    </div>
  )
}
}

export default ProgressBar