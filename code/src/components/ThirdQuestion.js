import React from "react";

export const ThirdQuestion = ({
    socialInput,
    onSocialInputChange,
    onStepChange,
    onPrevQuestionChange}) => {

    return (
<div className='question-container'>
<progress
className='progress-bar'
id='survey'
value='2'
max='6'
></progress>
<h2 className="intro-text">Time to select how much to bake!</h2>
        <h3>How many pieces of macarons would you like in your box?</h3>

<select value={socialInput} onChange={onSocialInputChange}>

<option value='8 pieces'>8 pieces</option>
<option value='10 pieces'>10 pieces</option>
<option value='12 pieces'>12 pieces</option>
</select>

</label>

<div className="buttons">
<button onClick={onPrevQuestionChange}>Previous question</button>
<button className="next-question" onClick={onStepChange}>Next question</button>
</div>


</div>

    );
};

export default ThirdQuestion;