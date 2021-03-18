import React from 'react';

export const Name = ({ name, setName }) => {
    const onNameChange = (e) => {
        console.log(`Name: ${e.target.value}`);
        setName(e.target.value);
    }
    
    return (
        <div className="form-components">
            <label tabindex="0" htmlFor={name}>Enter your name:</label>
            <input 
                type="text"
                onChange={onNameChange} 
                value={name}
                min="2"
                max="50"
                required
            />
        </div>
    )
}
