import React from 'react'

export const Overview= (props) => {
    const {step, nameInput, emailInput, positionInput, officeInput, skillsArray, linkInput, experienceTitle, onStepBackChange} = props
    const progress = (step/8)*100
    return(
        <div className="container">
        <div className="overview-container">
            <h2>SUMMARY</h2>
            <h3><span className="summaryTitle">Name:</span> {nameInput}</h3>
            <h3><span className="summaryTitle">Email:</span> {emailInput}</h3>
            <h3><span className="summaryTitle">Position:</span> {positionInput}</h3>
            <h3><span className="summaryTitle">Location:</span> {officeInput}</h3>
            <h3><span className="summaryTitle">Skills:</span> {skillsArray.join(', ')}</h3>
            <h3><span className="summaryTitle">Experience level:</span> {experienceTitle}</h3>
            <h3><span className="summaryTitle">Link to portfolio:</span> {linkInput}</h3>
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
