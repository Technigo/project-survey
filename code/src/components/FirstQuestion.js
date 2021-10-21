import React from "react";

// name. Input type text
const FirstQuestion = ({ colorInput, nameInput, onNameInputChange, surnameInput, onSurnameInputChange, onStepChange, onMinusStepChange }) => {
    return (
        <form>
            {/* Insert name */}
            <label htmlFor="nameInput"
            color={colorInput}>
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
            <input type="submit" 
                className="button"
               onClick={onStepChange}>
            </input>
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