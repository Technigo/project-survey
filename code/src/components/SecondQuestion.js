import React from "react";

const SecondQuestion =({flavourInput, onFlavourInput, onStepChange}) => {
return (

<div className="question-box">
<p className="intro-text">Which macaron <em>flavour</em> do you prefer?</p>
    <form className="radio-form">

    
<label className="flavours">
<input
type="radio"
value="Chocolate"
onChange={onFlavourInput}
checked={flavourInput === "Chocolate"}
/>
<span className="radio-input">Chocolate</span>
</label>

<label className="flavours">
<input
type="radio"
value="Vanilla"
onChange={onFlavourInput}
checked={flavourInput === "Vanilla"}
/>
<span className="radio-input">Vanilla</span>
</label>

<label className="flavours">
<input
type="radio"
value="Lemon"
onChange={onFlavourInput}
checked={flavourInput === "Lemon"}
/>
<span className="radio-input">Lemon</span>
</label>

<label className="flavours">
<input
type="radio"
value="Strawberry"
onChange={onFlavourInput}
checked={flavourInput === "Strawberry"}
/>
<span className="radio-input">Strawberry</span>
</label>

<label className="flavours">
<input
type ="radio"
value="Hazelnut"
onChange={onFlavourInput}
checked={flavourInput === "Hazelnut"}
/>
<span className="radio-input"> Hazelnut </span>
</label>
</form>

<div className="button-container">
<button className="second-btn" onClick={onStepChange}>OK, next!</button>
    </div>

    </div>
    
);
};
export default SecondQuestion;