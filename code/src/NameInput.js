import React from 'react'

const NameInput = (props) => {
    return (
        <div className='name-input-field'>
            <label htmlFor="name">
                <h1 className='type-field'>What is your name?</h1>
            </label>
            <input 
                type="text" 
                id={props.id} 
                value={props.name} 
                required={true} 
                placeholder='Type your name'
                onChange={event => props.onNameChange(event.target.value)}
                required
            />
        </div>
    )
}

export default NameInput
