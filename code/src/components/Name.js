import React, { useState } from 'react'


const Name = ({name, onNameChange, onStepChange}) => {

    // const [name, setName] = useState('')

    return (
        <form onSubmit = {event => event.preventDefault()}>
            <h3>Hey! Thanks for helping us to get even better. To start with, what´s your name?</h3>
            <input
            type="text"
            // onChange={ (event) => setName(event.target.value)}
            onChange = {onNameChange}
            value={name}
            />
            <button 
      disabled={name === ''}
      onClick={onStepChange}>Continue</button>
        </form>
    )
}

export default Name