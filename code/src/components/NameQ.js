import React from "react";

// declaring props inside the curly brackets
const NameQ =({ nameInput, onNameInputChange, onStepChange }) => {
return (
    <div className="questionBox">
    <form>
    <label htmlFor="nameInput">What's your name? </label>
        <input 
            id="nameInput" 
            type="text" 
            value={nameInput} 
            onChange={(event) => onNameInputChange(event)}
        />
        <button 
        disabled={nameInput === ''}
        onClick={onStepChange}
        >
            Next question
        </button>
    </form>
    </div>
)};

export default NameQ;