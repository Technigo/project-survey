import React from 'react'

const QuestionTwo = ({guestInput, nameInput, onGuestInputChange, onStepChange}) => {
    return (
    <section className="section" id="two">
         <div className="intro-text">
            <label>LOVE IS ALL YOU NEED</label>
            <h2>Nice to meet you {nameInput}!</h2>
            <p>Given the choice of anyone in the world, whom would you want as a dinner guest?</p>
        </div> 
        <form className="form">
            <label htmlFor="surnameInput">I´d say Barack Obama, you?</label>
            <input 
                id="surnameInput" 
                type="text" 
                value={guestInput} 
                onChange={onGuestInputChange}
            />
             <div className="buttons">
                <button onClick={onStepChange} href="#three" className="btn">Next please! <span role="img" aria-label="handpointer">👉🏽</span></button>
            </div>
        </form>
    </section>
    )
}


export default QuestionTwo

