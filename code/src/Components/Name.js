import React from 'react';

export const Name = ({ name, setName }) => {
    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    return (
        <div>
            <p>What is your name?</p>
            <input
                type="text"
                onChange={handleNameChange}
                value={name}
            />
        </div>
    )
}