import React from 'react'

const ThirdQuestion = ({ ageInput, onAgeInputChange, onStepChange, onStepChangeBack }) => {
    return (
        <form>
            <label htmlFor="ageInput">Type your age</label>
            <input 
                id="ageInput"
                type="text"
                value={ageInput}
                onChange={onAgeInputChange}
            />
            <button disabled={ageInput === ''} onClick={onStepChange}>Next Question</button>
            <button onClick={onStepChangeBack}>Previous Question</button>
        </form>
    )
}

export default ThirdQuestion