import React from 'react'


const Second = ({QuestionAlternative, setAlternative,onStepChange }) => {
    return (
<div className="box">

<div className="title">
<label className="label">Write a To do description:</label>
</div>
<div className="contentSelect"> 
<textarea 
maxlength="50"
required
value = {QuestionAlternative}
onChange = {(e) => setAlternative(e.target.value)}
></textarea>
</div>
<div> 
<button className="next" onClick={onStepChange}>Next questions</button>
</div>
</div>
    )
}

export default Second
