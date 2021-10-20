import React from 'react'


const First = ({QuestionAlternative, setAlternative, onStepChange }) => {


    return (
        

<div className="box">


<div className="title">
<label className="label"> Write a To do title: </label>

</div>

<div>
<input 
maxLength="20"
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



