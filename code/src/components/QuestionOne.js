import React from 'react'

const QuestionOne = ({ nameInput, onNameInputChange, onStepChange, onStepBackChange}) => {
    // const { nameInput, onNameInputChange } = props
    return (
        <section className="section" id="one" >
            <div className="intro-text">
            <label>ALL YOU NEED IS LOVE</label>
                <h2>I would love to know your name! My name is Jessi, what is yours?</h2>
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
            </form>
            <div className="buttons">
                <button onClick={onStepBackChange} href="#two" className="btn">Go back!</button>
                <button onClick={onStepChange} href="#two" className="btn">Next please!</button>
            </div>
            
        </section>
    )

}

// WITH EMOJIS ON BTNS
{/* <span role="img" aria-label="handpointer">👈🏽</span>  */}
{/* <span role="img" aria-label="handpointer">👉🏽</span> */}


export default QuestionOne

