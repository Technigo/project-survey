import React from 'react'

const NameInput = ( {id, name, onNameChange} ) => {
    return (
        <div className='name-input-field'>
            <label htmlFor="name">
                <h1 tabIndex="0" className='name-header'>What's your name, hungry friend?</h1>
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