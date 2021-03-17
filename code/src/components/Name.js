import React from 'react';

export const Name = ({name, setName}) => {
    const onNameChange = (e) => {
        console.log(`Age {e.target.value}`);
        setName(e.target.value);
    }
    
    return (
        <div className="form-components">
            <label htmlFor="name">Enter your name:</label>
            <input 
                type="text"
                onChange={onNameChange} 
                value={name}
                // ref="name"
                required 
            />
        </div>
    )
}
