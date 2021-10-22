import React from 'react'

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
    return (
        
        <form>
            <label htmlFor="nameInput">Type your first name</label>
            <input 
                className="input-field"
                id="nameInput"
                type="text"
                value={nameInput}
                onChange={onNameInputChange}
            />
            <img className="progress" src="./assets/q1.svg" alt="question-step-1"></img>
            <div className="first-button">
                <button className="first-btn" disabled={nameInput === ''} onClick={onStepChange}>Next &#9659;</button>
            </div>
        </form>
    )
}

export default FirstQuestion