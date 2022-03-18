import React from 'react'

export const Overview= (props) => {
    const {nameInput, emailInput, positionInput, officeInput, skillsArray, linkInput, experienceTitle, onStepBackChange} = props
    
   
    return(
        <div className="container">
        <div className="overview-container">
            <h2>Summary of your open application:</h2>
            <p>Name: {nameInput}</p>
            <p>Email: {emailInput}</p>
            <p>Position: {positionInput}</p>
            <p>Location: {officeInput}</p>
            <p>Skills: {skillsArray.join(', ')}</p>
            <p>Experience level: {experienceTitle}</p>
            <p>Link to portfolio: {linkInput}</p>
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
    </div>
      )
} 