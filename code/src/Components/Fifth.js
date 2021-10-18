import React from 'react'
import { useState } from 'react'

const Fifth = ({QuestionAlternative, setAlternative }) => {


    return (
        

<>

<div className="contentSelect"> 
<label>When</label>
<input type="time"
value={QuestionAlternative}
onChange ={(e) => setAlternative(e.target.value)}

/> 

</div>

</>

    )
}

export default Fifth



