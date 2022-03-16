import React from 'react'

const Summary = ({nameInput, qualityInput, homeInput, spellInput}) => {

    return(
        <section className="questionWrapper">
        <div className="question">
    <p> Hello {nameInput}!
    You are {qualityInput} and you belong to {homeInput}. Your favourite spell is {spellInput}</p>
    </div>
    </section>
    )      
}

export default Summary