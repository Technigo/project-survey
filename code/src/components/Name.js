import React, { useState } from 'react';

export const Name = () => {
    const [name, setName] = useState('');

    const onNameChange = (event) => {
        setName(event.target.value)

    }

    return (
        <div className="name-input">
            <form className="name">
                <label htmlFor="name">Hello, what's your name?</label>
                <input 
                id="name" 
                type="text" 
                className="input-name"
                placeholder="Type your answer here"
                value={name}
                onChange={onNameChange}
                required
            />
            </form>
        </div>

    )

}