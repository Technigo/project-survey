import React from 'react'
import { useState } from 'react'

const Second = ({QuestionAlternative, setAlternative }) => {
    return (
        
<div className="content"> 

<label>To do</label>
<textarea 
required
value = {QuestionAlternative}
onChange = {(e) => setAlternative(e.target.value)}
></textarea>

</div>

    )
}

export default Second
