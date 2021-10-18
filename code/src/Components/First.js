import React from 'react'
import { useState } from 'react'

const First = ({QuestionAlternative, setAlternative }) => {


    return (
        

<>
<div className="content"> 

<label className="labelTodoForm"> Write a To Do </label>

</div>

<div className="content"> 
<label>Title</label>

<input 
type="text"
required
value={QuestionAlternative}
onChange = {(e) => setAlternative(e.target.value)}


/>

</div>
</>

    )
}

export default First



