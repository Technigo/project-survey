import React from 'react'
import { useState } from 'react'

const Fifth = ({QuestionAlternative, setAlternative }) => {


    return (
 <>       
<div> 
<label className="label">When</label>
</div>

<div className="contentSelect"> 


<input type="time"
value={QuestionAlternative}
onChange ={(e) => setAlternative(e.target.value)}

/> 

</div>

</>

    )
}

export default Fifth



