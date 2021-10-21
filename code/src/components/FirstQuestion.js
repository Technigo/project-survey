import React from "react"

export const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
    return (

        <div className="step-container">
            <h2 className="survey-text">Find a game based on your profile</h2>
            <label htmlFor='nameInput'>
                <h3>What's your first name?</h3>
            </label>
            <input id='nameInput'
            type='text' 
            value={nameInput}
            onChange={onNameInputChange}
            placeholder='Your name..'
            />
            <button onClick={onStepChange}>Next question</button>

        </div>
    )
}