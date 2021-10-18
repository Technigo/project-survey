import React from 'react'

const ThirdQuestion = ({ ageInput, onAgeInputChange, onStepChange }) => {
    return (
        <form>
            <label htmlFor="ageInput">Type your age</label>
            <input 
                id="ageInput"
                type="text"
                value={ageInput}
                onChange={onAgeInputChange}
            />
            <button onClick={onStepChange}>Next Question</button>
        </form>
    )
}

export default ThirdQuestion