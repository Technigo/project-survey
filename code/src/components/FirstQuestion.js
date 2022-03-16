import React from "react";

const FirstQuestion = ({ username, onInputChange}) => {
    resturn (
<div>
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
