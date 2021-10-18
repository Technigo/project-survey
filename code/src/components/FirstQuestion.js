import React from "react"

export const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
    return (

        <div className="first-container">
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