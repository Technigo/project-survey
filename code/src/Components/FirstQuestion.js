import React from 'react'

const FirstQuestion = ({onStepChange, nameInput, onNameInputChange}) => {
    return (
        <section className="questionWrapper">
        <div className="question">
            <form>
                <h2>So you want to know which Harry Potter character you are?</h2>
                <p>But first, enter your name here.</p>
                <input
                type="text"
                placeholder="Your name here"
                aria-label="Write your name"
                className="input"
                value={nameInput}
                onChange={onNameInputChange}></input>
                <button className="btn" onClick={onStepChange}>Next Question</button>
            </form>
        </div>
        </section>
    )
}





export default FirstQuestion