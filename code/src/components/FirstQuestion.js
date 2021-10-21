import React from "react";

// name. Input type text
const FirstQuestion = ({ nameInput, onNameInputChange, surnameInput, onSurnameInputChange, onStepChange, onMinusStepChange }) => {
    return (
        <form>
            {/* Insert name */}
            <label htmlFor="nameInput">
                Type your first name: 
            </label>
            <input 
                id="nameInput" 
                type="text" 
                value={nameInput} 
                onChange={onNameInputChange} 
            />
            <label htmlFor="surnameInput">
                Type your surname:
            </label>
            <input id="surnameInput"
                type="text"
                value={surnameInput}
                onChange={onSurnameInputChange} 
            />

        <div className="button-box">
            <button type="submit" 
                className="button"
                onClick={onStepChange}>
                   Next question
            </button>
            <button 
                className="button"
                onClick={onMinusStepChange}>
                Previous question
            </button>
        </div>

      </form>
    )
}

export default FirstQuestion;