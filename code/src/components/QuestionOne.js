import React from 'react'

const QuestionOne = ({ nameInput, onNameInputChange, onStepChange}) => {
    // const { nameInput, onNameInputChange } = props
    return (
        <section className="section" id="one" >
            <div className="intro-text">
            <label>LOREM IPSUM DOLOR SIT AMET</label>
                <h2>I'd love to know your name! My name is Jessi, what is yours?</h2>
                <p>Did you know that the most popular names over the last 100 years are James & Mary?</p>
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
                    <button onClick={onStepChange} href="#two" className="btn">Next please! <span role="img" aria-label="handpointer">👉🏽</span></button>
                </div>
            </form>
        </section>
    )

}


export default QuestionOne

