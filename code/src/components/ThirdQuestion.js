import React from "react";

const ThirdQuestion =({sizeInput, onSizeInput, onStepChange}) => {
return (
    <div className="question-box">
<h2 className="intro-text">Now we need to know <em>how much</em> we need to bake</h2>
<h3 className="list-question">How many pieces of macarons would you like to have in your box?</h3>


<select className ="drop-down" value={sizeInput} onChange={onSizeInput}>
<option value="6 pieces">6 pieces</option>
    <option value="8 pieces">8 pieces</option>
    <option value="10 pieces">10 pieces</option>
    <option value="12 pieces">12 pieces</option>
    <option value="16 pieces">16 pieces</option>
    <option value="18 pieces">18 pieces</option>
</select>


<div className="button-container">
<button className="third-btn" onClick={onStepChange}>OK, next!</button>
    </div>
    </div>
);
};
export default ThirdQuestion;