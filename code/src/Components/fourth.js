


import React from 'react'
import { useState } from 'react'

const Fourth = ({QuestionAlternative, setAlternative }) => {


    return (
        

<>
<div className="contentSelect"> 
<label>Location</label>
<select

value={QuestionAlternative}
onChange ={(e) => setAlternative(e.target.value)}

>
    <option value="Home">Home</option>
    <option value="Work">Work</option>
    <option value="Other">Other</option>
</select>
</div>
</>

    )
}

export default Fourth



