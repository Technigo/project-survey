import React from 'react'

const NameInput = ( {id, name, onNameChange} ) => {
    return (
        <div className='name-input-field'>
            <label htmlFor="name">
                <h1 className='name-header'>What is your name?</h1>
            </label>
            <input 
                className='name-text'
                type="text" 
                id={id} 
                value={name} 
                placeholder='Type your name'
                required
                onChange={onNameChange} 
            />
        </div>
    )
}

export default NameInput
