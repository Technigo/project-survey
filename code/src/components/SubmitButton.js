import React from "react"

export const SubmitButton = ({nameInput, onStepChange}) => {

    return (

        <div className="submit-container">
            <h2 className="survey-text">Find a game based on your profile</h2>
            <h3>Are you ready {nameInput} to find a suitable game?</h3>
            <button onClick={onStepChange}>Find game</button>
        </div>
    )
}