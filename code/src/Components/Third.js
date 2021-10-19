import React from 'react'


const Third = ({ QuestionAlternative, setAlternative, onStepChange }) => {

    return (
<div className="box">

<div className="radioContainer"> 
<div className="contentRadio">
<label className="label">Important</label>
<input 
className="radio"
type="radio"
value="Important"
onChange = {(e) => setAlternative(e.target.value)}
checked={QuestionAlternative === "Important"}

/>
</div>

<div className="contentRadio">
<label className="label">Not important</label>
<input 
className="radio"
type="radio"
value="Not important"
onChange = {(e) => setAlternative(e.target.value)}
checked={QuestionAlternative === "Not important"}
/>
</div>
</div>
<div>
<button className="next" onClick={onStepChange}>Next questions</button>
</div>
</div>
    )
}

export default Third
