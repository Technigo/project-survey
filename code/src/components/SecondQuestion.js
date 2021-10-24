import React from 'react'

const SecondQuestion = ({ surnameInput, onSurnameInputChange, onStepChange }) => {
    return (
        <>
    <form> 
        <label htmlFor="surnameInput">Type your surname</label>
        <input 
        id="surnameInput" 
        type="text" 
        value={surnameInput} 
        onChange={onSurnameInputChange}
        />
        <button 
        disabled={surnameInput === ''}
        onClick={onStepChange}
        >Next question</button>
    </form>
        </>
    )
}

export default SecondQuestion