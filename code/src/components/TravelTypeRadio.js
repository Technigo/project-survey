import React from 'react';

import { Button } from './Button';

export const TravelTypeRadio = ({setTravelType}) => {
  const travelTypes = ["Holiday", "Business"];
  const onTravelTypeChange = (e) => {
    setTravelType(e.target.value)
  }
  return (
    <>  
      <h2 className="question-title" tabIndex="0"><span className="arrow">➛</span> What was the purpose of your visit?</h2>
      <section className="radio-buttons-container">
        {travelTypes.map(travelType => 
          <div key={travelType} className="radio-box">
            <label htmlFor={travelType} className="radio-button-label" aria-label="Use arrows to choose, then press enter to move to next question">
              <input 
                type="radio"
                name="traveltype"
                className="radio-button"
                id={travelType}
                value={travelType}
                onChange={onTravelTypeChange}    
                required
              />
              <span className="radio-text">{travelType === "Business" ? <i className="fas fa-laptop"></i> : <i className="fas fa-cocktail"></i>} {travelType}</span>
            </label>
          </div>
        )}
      </section>
      
      <Button 
        button="CONTINUE" />
    </>
  )
}
