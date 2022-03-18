import React from 'react'

const QuestionOne = ({nameInput, handleNameInputChange, onStepChange, onStepBackChange}) => {

    return (

       <section className="section" id="one" >
            <div className="intro-text">
            <label></label>
                <h2>What is your name?</h2>
            </div>
        <form>
            <label htmlFor="nameInput"><p>Type your name here: </p></label>
        <input
        id="nameInput"
        type="text"
        onChange={handleNameInputChange}
        value={nameInput}
        />
        </form>
        <div className="buttons">
                <button type="submit" onClick={onStepBackChange} href="#one" className="btn">Go back</button>
                <button type="submit" onClick={onStepChange} href="#one" className="btn">Next</button>
            </div>

        </section>
    )

}

export default QuestionOne