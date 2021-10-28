import React from 'react'

const Step1Player = ({ nameInput, onNameInputChange, onStepChange }) => {
    return (
        <form onSubmit={onStepChange}>
            <label htmlFor="nameInput">First thing's first, player:</label>
            <input
                id="nameInput"
                type="text"
                placeholder="Your handle..."
                value={nameInput}
                onChange={onNameInputChange}
                required
            />
            <button type="submit">Let's get it on!</button>
        </form>
    )
}

export default Step1Player