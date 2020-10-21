import React from 'react';

export const Questionrange = ({coffeeprice, onRangeChange}) => {
  return (
    <>
      <div>
        <label htmlFor="answerrange">How much do you think a decent cup of coffee should cost?</label>
          <input type="range"
              onChange = {event => onRangeChange(event.target.value)}
              min="1" max="6" 
              value={coffeeprice} 
              className="slider" id="myRange"/>
      </div>
    </>
  )
}