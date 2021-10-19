import React from 'react'

const QuestionOne = ({ nameInput, onNameInputChange, onStepChange }) => {
    // const { nameInput, onNameInputChange } = props
    return (
        <section>
            <h2>You ARE a real sport! Thanks!</h2>
            <p>Lets start out with your name.</p>
            <form id="question-one" className="form">
                <label htmlFor="nameInput">Your name here!</label>
                <input
                    id="nameInput"
                    type="text"
                    value={nameInput}
                    onChange={onNameInputChange}
                />
                <button onClick={onStepChange} className="btn">Next please! <span role="img" aria-label="handpointer">👉🏽</span></button>
            </form>
        </section>
    )

}


export default QuestionOne

