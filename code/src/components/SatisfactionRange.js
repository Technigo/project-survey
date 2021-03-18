import React from 'react';

import { Button } from './Button';

export const SatisfactionRange = ({satisfaction, setSatisfaction}) => {
  const onSatisfactionChange = (e) => {
    setSatisfaction(e.target.value)
  }

  return (
    <>
      <h2 className="question-title"><span className="arrow">➛</span> How satisfied are you with your stay?</h2>
      <div className="range-container">
        <input 
          className="range" 
          type="range" 
          name="satisfaction-range"
          value={satisfaction} 
          min="0" 
          max="5" 
          onChange={onSatisfactionChange}/>
        <span id="rangeValue" className="range-value">{satisfaction} <i className="fas fa-star"></i>☆</span>
      </div>
      <Button 
        button="SUBMIT" />
    </>
  )
}