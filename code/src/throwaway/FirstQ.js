import React from "react";
// declaring props inside the curly brackets
const FirstQ =({ nameInput, onNameInputChange, onStepChange }) => {
return (
    <form>
    <label htmlFor="nameInput">Type your name</label>
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
)};

export default FirstQ;