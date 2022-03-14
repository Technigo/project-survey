import React from 'react'


const Step1Player = ({ nameInput, onNameInputChange }) => {

    return (
        
        <form>
        <label for="nameInput">What's your name?</label>

        <div>

            <input
                id="nameInput"
                type="text"
                placeholder="Put it right here"
                value={nameInput}
                onChange={onNameInputChange}
                required
            />

        <button type="submit">Let's go!</button>
        </div>

        </form>
    )

}

export default Step1Player