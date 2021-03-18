import React from 'react';

import { Button } from './Button';

export const TravelTypeRadio = ({setTravelType}) => {
  const travelTypes = ["Holiday", "Business"];
  const onTravelTypeChange = (e) => {
    setTravelType(e.target.value)
  }
  return (
    <>  
      <h2 className="question-title"><span className="arrow">➛</span> What was the purpose of your visit?</h2>
      
        {travelTypes.map(travelType => 
          <div key={travelType} className="radio-box">
            <label htmlFor={travelType} className="radio-button-label">
              <input 
                type="radio"
                id={travelType}
                value={travelType}
                name="traveltype"
                onChange={onTravelTypeChange}    
                className="radio-button"
                required
              />
              <span className="radio-text">{travelType === "Business" ? <i className="fas fa-laptop"></i> : <i className="fas fa-cocktail"></i>} {travelType}</span>
            </label>
          </div>
        )}
      
      <Button 
        button="CONTINUE" />
    </>
  )
}
