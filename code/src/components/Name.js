import React, { useState } from 'react';

export const Name = () => {
    const [name, setName] = useState('name')
    
    return (
        <div className="form-components">
            <label htmlFor="name">Enter your name:</label>
            <input 
                type="text"
                onChange={(event) => setName(event.target.value)} 
                value={name}
                ref="name"
                required 
            />
        </div>
    )
}
