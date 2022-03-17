import React from "react";

const SecondQuestion =({flavourInput, onFlavourInput, onStepChange}) => {
return (
    <div className="radio-container">
<h2 className="intro-text">First we need to know a bit moore about your macarons preferences...</h2>
<h3 className="question">Which flavour do you like the most?</h3>

<label className="radio-form">
<h4>Chocolate</h4>
<input
className="radio-button"
type="radio"
value="Chocolate"
onChange={onFlavourInput}
checked={flavourInput === "Chocolate"}
/>
<span class="checkbox"></span>
</label>

<label className="radio-form">
<h4>Lemon</h4>
<input
className="radio-button"
type="radio"
value="Lemon"
onChange={onFlavourInput}
checked={flavourInput === "Lemon"}
/>
<span class="checkbox"></span>
</label>

<label className="radio-form">
<h4>Pistachio</h4>
<input
className="radio-button"
type="radio"
value="Pistachio"
onChange={onFlavourInput}
checked={flavourInput === "Pistachio"}
/>
<span class="checkbox"></span>
</label>

<label className="radio-form">
<h4>Raspberry</h4>
<input
className="radio-button"
type="radio"
value="Raspberry"
onChange={onFlavourInput}
checked={flavourInput === "Raspberry"}
/>
<span class="checkbox"></span>
</label>

<div className="button-wrapper">
<button className="next-question" onClick={onStepChange}>Next Question</button>
    </div>
    </div>
);
};
export default SecondQuestion;