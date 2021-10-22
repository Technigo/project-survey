import React from "react";

const AgeQ = ({
    ageInput, 
    onAgeInputChange, 
    onStepChange
}) => {

return (
    <div className="bigWrapper">
    <form>
        <div className="formWrapper">
    <label htmlFor="ageInput">How old are you?</label>
        <input 
        id="ageInput" 
        type="text" 
        value={ageInput} 
        onChange={onAgeInputChange}
        />
    <button 
    disabled={ageInput === ''}
    onClick={onStepChange}
    >
    Next question
    </button>
    </div>
    </form>
    </div>
);
};


export default AgeQ;