import React from 'react'

const FirstQuestion = ({ nameInput, onNameInputChange }) => {
    return (
        <div className="container">

        <form>
            <label>
                <h2>What's your name?</h2>
            <input
                className="formControl" 
                id="nameInput"
                type="text"
                placeholder="Your name here"
                value={nameInput}
                onChange={onNameInputChange}
                />
                </label>
        </form>
        </div>
    )
}

export default FirstQuestion
