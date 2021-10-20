import React from "react";

const FourthQ = ({
    flavour,
    onFlavourChange, 
    onStepChange,
}) => {
return (
<form>
    <label>
        Pick your popcorn flavour
        <select value={flavour} onChange={event => onFlavourChange(event.target.value)}>
            <option value="salty">Salty</option>
            <option value="caramel">Caramel</option>
            <option value="garlic">Garlic</option>
            <option value="butter">Butter</option>
            </select>
            </label>
            <button onClick={onStepChange}>Next</button>
</form> 
);
};


export default FourthQ;