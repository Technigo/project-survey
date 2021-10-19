import React from 'react'

const QuestionTwo = ({surnameInput, onSurNameInputChange, onStepChange}) => {
    return (
    <div>
        <p>So, are you a cat or a dog person?</p>
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


export default QuestionTwo


// MAKE THIS RADIOBUTTON QUESTION

