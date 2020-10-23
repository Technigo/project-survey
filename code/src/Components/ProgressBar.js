import React from 'react';

import './progressbar.css';

export const ProgressBar = (props) => {
 
  return (
    <progress 
      className="progress-bar" 
      value={props.value} 
      max="100">
      {props.value}
    </progress>
  );
};