import React from "react";

const ThirdQ = ({
    happiness,
    onHappinessChange, 
    onStepChange,
}) => {
return (
<form>
    <label>
        <input 
        id="radiotest" 
        type="radio" 
        value="happy"
        onChange={() => onHappinessChange('happy')}
        checked={happiness === "happy"}
        />
    <span role="img" aria-label="Happyface" >
        😁
    </span>
   </label>

   <label>
        <input 
        id="radiotest" 
        type="radio" 
        value="sad"
        onChange={() => onHappinessChange('sad')}
        checked={happiness === "sad"}
        />
    <span role="img" aria-label="Sadface" >
        😔
    </span>
   </label>

   <button onClick={onStepChange}>Next</button>
</form> 

);
};


export default ThirdQ;