import React from "react";

const ThirdQuestion =({sizeInput, onSizeInput, onStepChange}) => {
return (
    <div className="list-container">
<h2 className="intro-text">Now we need to know how much we need to bake</h2>
<h3 className="question">How many pieces of macarons would you like to have in your box?</h3>

<select value={sizeInput} onChange={onSizeInput}>
    <option value="8 pieces">8 pieces</option>
    <option value="10 pieces">10 pieces</option>
    <option value="12 pieces">12 pieces</option>
</select>

<div className="button-wrapper">
<button className="next-question" onClick={onStepChange}>Next Question</button>
    </div>
    </div>
);
};
export default ThirdQuestion;