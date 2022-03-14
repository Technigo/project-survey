import React from 'react'

const Intro = ({onStepChange}) => {
    return(
<div> 
    <p>Which Harry Potter character are you?</p>
    <button className = "btn" onClick = {onStepChange}> Start </button>
</div>
    )
}

export default Intro;