import React from 'react';

import { Button } from './Button';

// Component for the range to choose satisfaction level

export const SatisfactionRange = ({satisfaction, setSatisfaction}) => {
  const onSatisfactionChange = (e) => {
    setSatisfaction(e.target.value)
  }

  return (
    <>
      <label htmlFor="range">
        <h2 className="question-title" tabIndex="0"><span className="arrow">➛</span> How satisfied are you with your stay?</h2>
      </label>
      <div className="range-container">
        <input 
          className="range" 
          type="range" 
          name="satisfaction-range"
          aria-label="Use arrows and then press enter"
          min="0" 
          max="10" 
          value={satisfaction} 
          onChange={onSatisfactionChange}/>
        <span id="rangeValue" className="range-value">{satisfaction} ☆</span>
      </div>
      <Button 
        button="SUBMIT" />
    </>
  )
}