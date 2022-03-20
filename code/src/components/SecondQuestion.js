import React from "react";

const SecondQuestion =({flavourInput, onFlavourInput, onStepChange}) => {
return (

<div className="radio-wrapper">
    <h2>Which macaron flavour do you prefer?</h2>
    <form className="radio-form">
    
<label className="flavours">
<input
type="radio"
value="chocolate"
onChange={onFlavourInput}
checked={flavourInput === "chocolate"}
/>
Chocolate
</label>

<label className="flavours">
<input
type="radio"
value="vanilla"
onChange={onFlavourInput}
checked={flavourInput === "vanilla"}
/>
Vanilla
</label>





<div className="button-wrapper">
<button className="next-question" onClick={onStepChange}>Next Question</button>
    </div>
    </form>
    </div>
    
);
};
export default SecondQuestion;