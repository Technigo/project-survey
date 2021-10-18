import React from 'react'
import { useState } from 'react'

const Third = ({ QuestionAlternative, setAlternative   }) => {

    return (
     <>   

<div className="contentSelect">
<label>Important</label>
<input 
className="radio"
type="radio"
value="Important"
onChange = {(e) => setAlternative(e.target.value)}
checked={QuestionAlternative === "Important"}

/>
</div>

<div className="contentSelect">
<label>Not important</label>
<input 
className="radio"
type="radio"
value="Not important"
onChange = {(e) => setAlternative(e.target.value)}
checked={QuestionAlternative === "Not important"}
/>
</div>

</>
    )
}

export default Third
