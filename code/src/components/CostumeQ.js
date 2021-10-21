import React from "react";

const CostumeQ = ({
    costume,
    onCostumeChange, 
    onStepChange,
}) => {
return (
    <div className="questionBox">
<form>
    <label>
        Choose your costume: 
        <select value={costume} onChange={event => onCostumeChange(event.target.value)}>
            <option value="pumpkin">Pumpkin</option>
            <option value="vampire">Vampire</option>
            <option value="unicorn">Unicorn</option>
            <option value="moth">Moth</option>
            <option value="zombie">Zombie</option>
            <option value="Peppa Pig">Peppa Pig</option>
            <option value="Ingvar Oldsberg">Ingvar Oldsberg</option>
            </select>
            </label>
            <button onClick={onStepChange}>Next question</button>
</form> 
</div>
);
};


export default CostumeQ;