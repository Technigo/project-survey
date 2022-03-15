import React from 'react'

const Intro = ({onStepChange}) => {
    return(
        <section className="questionWrapper">
<div className="question"> 
    <h1>Which Harry Potter character are you?</h1>
    <button className = "btn" onClick = {onStepChange}> Start </button>
</div>
</section>
    )
}

export default Intro;