import React from 'react'

import Button from './Button'


const NameText = ({ nameInput, onNameInputChange }) => {
    return (
        <>
            <label htmlFor="nameInput" className="label-title"> What's your name? </label>
            <input
                id="nameInput"
                name="name"
                maxLength="20"
                className="input-label"
                type="text"
                placeholder="Type your name here"
                value={nameInput}
                onChange={onNameInputChange}
                required
            />

            <Button button="continue" />
        </>
    )
}

export default NameText