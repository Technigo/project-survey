import React from 'react';

import 'styles/rangeslider.css';

export const RangeSlider = ( {likeMyJob, setLikeMyJob} ) => {

  return (
    <div className="slide-container">
      <label tabIndex="0">5. How much do you like your work in a scale from 1 to 10?</label>
        <input 
          type="range" 
          min="1" 
          max="10" 
          value={likeMyJob} 
          className="slider" 
          id="range"
          onChange={event => setLikeMyJob(event.target.value)}>
        </input>    
    </div>
  );
};