import React from 'react'

const QuestionOne = ({ nameInput, onNameInputChange, onStepChange}) => {
    // const { nameInput, onNameInputChange } = props
    return (
        <section className="section" id="one" >
            <div className="intro-text">
                <h2>First let's get to know eachother!</h2>
                <p>My name is Jessi, what's yours?</p>
            </div>
            <form id="question-one" className="form">
                <label htmlFor="nameInput">Type your name here</label>
                <input
                    id="nameInput"
                    type="text"
                    value={nameInput}
                    onChange={onNameInputChange}
                />
                <div className="buttons">
                    <button onClick={onStepChange} className="btn">Next please! <span role="img" aria-label="handpointer">👉🏽</span></button>
                </div>
            </form>
        </section>
    )

}


export default QuestionOne

