import React from 'react'

const QuestionOne = ({nameInput, onNameInputChange, onStepChange, onStepBackChange}) => {

    return (

       <section className="section" id="one" >
            <div className="intro-text">
            <label></label>
                <h2>What is your name?</h2>
            </div>
        <form>
            <label htmlFor="nameInput">Type your name here: </label>
        <input
        id="nameInput"
        type="text"
        onChange={onNameInputChange}
        value={nameInput}
        />
        </form>
        <div className="buttons">
                <button type="submit" onClick={onStepBackChange} href="#two" className="btn">Go back!</button>
                <button type="submit" onClick={onStepChange} href="#two" className="btn">Next please!</button>
            </div>

        </section>
    )

}

export default QuestionOne