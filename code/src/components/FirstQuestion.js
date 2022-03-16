import React from "react";

const FirstQuestion = ({ username, onInputChange}) => {
    return (
<div>
    <p>To begin with, what is your name?</p>
<label htmlFor="name">Type your name here</label>
<input
id="name"
type="text"
value={username}
onChange={onInputChange}/>
</div>
    );
};

export default FirstQuestion;
