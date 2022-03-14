import React from 'react'

const FirstQuestion = ({onStepChange, nameInput, onNameInputChange}) => {
    return (
        <div className="firstQuestion">
            <form>
                <h2>So you want to know which Harry Potter character you are?</h2>
                <p>But first, enter your name here.</p>
                <input
                type="text"
                className="input"
                value={nameInput}
                onChange={onNameInputChange}></input>
                <button className="btn" onClick={onStepChange}>Next Question</button>
            </form>
        </div>
    )
}





export default FirstQuestion