import React from 'react';

export const ProgressBar = (props) =>{
  return(
    <div className="progress-bar">
        <progress 
          className="progress"
          id="progress" 
          value={props.progress} 
          max="4"></progress>
          <output name="progress-output" >{props.progress}/4</output>
    </div>
    
    
  )
}