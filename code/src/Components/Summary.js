import React from 'react'

const Summary = ({nameInput, qualityInput, homeInput}) => {
    return(
        <section className="questionWrapper">
        <div className="question">
    <p> Hello {nameInput}!
    You are {qualityInput} and you belong to {homeInput}.</p>
    </div>
    </section>
    )      
}



export default Summary