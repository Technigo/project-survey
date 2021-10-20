import React from 'react'

const QuestionTwo = ({surnameInput, nameInput, onSurNameInputChange, onStepChange}) => {
    return (
    <section className="section">
         <div className="intro-text">
            <h2>Nice to meet you {nameInput}!</h2>
            <p>Given the choice of anyone in the world, whom would you want as a dinner guest?</p>
        </div> 
        <form className="form">
            <label htmlFor="surnameInput">I´d say Barack Obama, you?</label>
            <input 
                id="surnameInput" 
                type="text" 
                value={surnameInput} 
                onChange={onSurNameInputChange}
            />
             <div className="buttons">
                <button onClick={onStepChange} className="btn">Next please! <span role="img" aria-label="handpointer">👉🏽</span></button>
            </div>
        </form>
    </section>
    )
}


export default QuestionTwo

