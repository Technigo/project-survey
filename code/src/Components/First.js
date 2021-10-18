import React from 'react'
import { useState } from 'react'
import Create from './Create'

const First = ({QuestionAlternative, setAlternative, onStepChange }) => {


    return (
        

<div className="box">


<div>
<label className="label"> Write a To Do </label>
</div>

<div>
<input 
maxlength="20"
type="text"
required
value={QuestionAlternative}
onChange = {(e) => setAlternative(e.target.value)}
/>
</div>

<div>
<button className="next" onClick={onStepChange}>Next questions</button>
</div>





</div>

    )
}

export default First



