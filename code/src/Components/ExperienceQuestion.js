import React from 'react'

export const ExperienceQuestion = (props) => {
    const {step, experienceLevel, onExperienceLevelChange, experienceTitle, onStepChange, onStepBackChange} = props
    const progress = (step/8)*100
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
            <div className="progress-container">
                <div style={{width: `${progress}%`}} className="progress-value">
                </div>
            </div>
        </div>
      )
} 