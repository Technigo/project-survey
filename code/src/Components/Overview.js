import React from 'react'

export const Overview= (props) => {
    const {step, nameInput, emailInput, positionInput, officeInput, skillsArray, linkInput, experienceTitle, onStepBackChange} = props
    const progress = (step/8)*100
    return(
        <div className="container">
        <div className="overview-container">
            <h2>Summary:</h2>
            <h3>Name: {nameInput}</h3>
            <h3>Email: {emailInput}</h3>
            <h3>Position: {positionInput}</h3>
            <h3>Location: {officeInput}</h3>
            <h3>Skills: {skillsArray.join(', ')}</h3>
            <h3>Experience level: {experienceTitle}</h3>
            <h3>Link to portfolio: {linkInput}</h3>
        </div>
        <div className="buttons">
                <input 
                    className="nextBtn button"
                    type="submit"
                    />
                <button className="button"
                    onClick={onStepBackChange}
                    ><span className="arrow left"></span>Back</button>
                
            </div>
            <div className="progress-container">
                <div style={{width: `${progress}%`}} className="progress-value">
                </div>
            </div>

    </div>
      )
} 
