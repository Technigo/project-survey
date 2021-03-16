import React from 'react'

const NameInput = (props) => {
    return (
        <div className='name-input-field'>
            <label htmlFor="name">
                <h1 className='name-header'>What is your name?</h1>
            </label>
            <input 
                className='name-text'
                type="text" 
                id={props.id} 
                value={props.name} 
                placeholder='Type your name'
                required
                onChange={event => props.onNameChange(event.target.value)} 
            />
        </div>
    )
}

export default NameInput
