import React from 'react'

export const ExperienceQuestion = (props) => {
    const {experienceLevel, onExperienceLevelChange, experienceTitle, onStepChange, onStepBackChange} = props
    
    return(
        <div className="container">
            <p className="labelStyle">What experience level position are you looking for?</p>
            <input 
            className="rangeSlider"
            type="range" 
            min="0"
            max="4"
            value={experienceLevel} 
            onChange={onExperienceLevelChange}/>
            <h3>{experienceTitle}</h3>
            <div className="buttons">
                <button className="button"
                    onClick={onStepChange}
                    >Next <span className="arrow right"></span></button>
                <button className="button"
                    onClick={onStepBackChange}
                    ><span className="arrow left"></span> Back</button>
                
            </div>
        </div>
      )
} 