import React from "react";

const AgeQ = ({ageInput, onAgeInputChange, onStepChange}) => {
return (
<form>
    <label htmlFor="ageInput">How old are you?</label>
        <input 
        id="ageInput" 
        type="text" 
        value={ageInput} 
        onChange={onAgeInputChange}
        />
    <button onClick={onStepChange}>Next question</button>
</form> 
);
};


export default AgeQ;