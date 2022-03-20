import React from "react";

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange}) => {
    return (
<div>
    <div className="welcome">
<p className="intro-text">To begin with, what is your <em>name</em>???</p>
<div className="input-box">
<label className="question-input" htmlFor="nameInput">YOUR FULL NAME:</label>
<input className="text-answer"
id="nameInput"
type="text"
placeholder="name is required"
value={nameInput}
onChange={onNameInputChange}
/>
</div>
<button
disabled={nameInput === ' '}
onClick={onStepChange}>OK, next!!!</button>
</div>
</div>
    );
};

export default FirstQuestion;
