import React from "react"

export const SubmitButton = ({nameInput, onStepChange, onPrevQuestionChange}) => {

    return (
      
        <div className="step-container">
            <h2 className="survey-text">Find a game based on your profile</h2>
            <h3>Are you ready {nameInput} to find a suitable game?</h3>

            <div className="button-wrapper">
            <button onClick={onPrevQuestionChange}>Previous question</button>
            <button className="next-question" onClick={onStepChange}>Find game</button>
        </div>
        </div>

        
        
    )
}