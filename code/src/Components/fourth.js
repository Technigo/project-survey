


import React from 'react'


const Fourth = ({QuestionAlternative, setAlternative, onStepChange }) => {


    return (
        
<div className="box">

<div><label className="label">Location</label></div>

<div className="contentSelect"> 

<select

value={QuestionAlternative}
onChange ={(e) => setAlternative(e.target.value)}

>
    <option value="Home">Home</option>
    <option value="Work">Work</option>
    <option value="Other">Other</option>
</select>
</div>
<div>
<button className="next" onClick={onStepChange}>Next questions</button>
</div>
</div>

    )
}

export default Fourth



