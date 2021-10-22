import React from 'react'

const SecondQuestion = ({ lastnameInput, onLastnameInputChange, onStepChange, onStepChangeBack }) => {
    return (
        <form>
            <label htmlFor="lastnameInput">Type your last name</label>
            <input 
                className="input-field"
                id="lastnameInput"
                type="text"
                value={lastnameInput}
                onChange={onLastnameInputChange}
            />
            <img className="progress" src="./assets/q2.svg" alt="question-step-2"></img>
            <div className="buttons">
                <button onClick={onStepChangeBack}>&#9669; Previous</button>
                <button disabled={lastnameInput === ''} onClick={onStepChange}>Next &#9659;</button>
            </div>
        </form>
    )
}

export default SecondQuestion