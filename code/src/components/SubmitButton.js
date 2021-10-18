import React from "react"

export const SubmitButton = ({nameInput, onStepChange}) => {

    return (

        <div className="submit-container">
            <h3>Are you ready {nameInput} to find a suitable game?</h3>
            <button onClick={onStepChange}>Find game</button>
        </div>
    )
}