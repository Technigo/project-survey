import React from "react";

// declaring props inside the curly brackets
const NameQ =({ 
    nameInput, 
    onNameInputChange, 
    onStepChange 
}) => {

return (
    <div className="bigWrapper">
    <form>
        <div className="formWrapper">
    <label>What's your name? 
        <input 
            id="nameInput" 
            type="text" 
            value={nameInput} 
            onChange={(event) => onNameInputChange(event)}
        />
        </label>
        <button 
        disabled={nameInput === ''}
        onClick={onStepChange}
        >
        Next question
        </button>
        </div>
    </form>
    </div>
)};

export default NameQ;