import React from 'react'

const QuestionThree = ({surnameInput, onSurNameInputChange, onStepChange}) => {
    return (
    <div>
        <h2>That´s what we thought!</h2>
        <p>This is the body text for the question three.</p>
        <form className="form">
            <label htmlFor="surnameInput">Lorem ipsum dolor</label>
            <input 
            id="surnameInput" 
            type="text" 
            value={surnameInput} 
            onChange={onSurNameInputChange}
            />
           <button onClick={onStepChange} className="btn">Next please! <span role="img" aria-label="handpointer">👉🏽</span></button>
        </form>
    </div>
    )
}


export default QuestionThree


// MAKE THIS A DROPDOWN SELECT QUESTION