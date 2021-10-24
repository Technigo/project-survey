import React from 'react'

const FirstQuestion = ( {nameInput, onNameInputChange, onStepChange }) => {

    return (
        <>
        <form className="section">
            <h2>Welcome and thank you for filling out the form today!</h2>
            <label htmlFor="nameInput">Please type your name</label>
            <input 
            id="nameInput" 
            type="text" 
            value={nameInput} 
            onChange={onNameInputChange}
            />
            <button 
            disabled={nameInput === ''}
            onClick={onStepChange}
            >Next question</button>
        </form>
        </>
    )
}

export default FirstQuestion