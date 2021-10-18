import React from 'react'


const Name = ({ nameInput, onNameInputChange, onStepChange }) => {
    return (
        <>
            <label htmlFor="nameInput"> What's your name? </label>
            <input
                id="nameInput"
                type="text"
                value={nameInput}
                onChange={onNameInputChange}
            />
        </>
    )
}

export default Name