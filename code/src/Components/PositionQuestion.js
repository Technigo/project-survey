import React from 'react'

export const PositionQuestion = (props) => {
    const {step, positionInput, onPositionInputChange, onStepChange, onStepBackChange} = props
    const progress = (step/8)*100
    return(
        <div className="container">
            <label htmlFor="positionInput" className="labelStyle">What position are you interested in?</label>
            <select 
                id="positionInput"
                value={positionInput}
                onChange={onPositionInputChange}>
                <option value="">Select position:</option>
                <option value="frontend developer">frontend developer</option>
                <option value="backend developer">backend developer</option>
                <option value="fullstack developer">fullstack developer</option>
            </select>
            <div className="buttons">
                <button className="button"
                    disabled={positionInput===''}
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