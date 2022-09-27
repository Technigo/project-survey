import React from 'react';

export const Name = ({ name, setName }) => {
    const handleNameChange = (event) => {
        setName(event.target.value);
        console.log('value is:', event.target.value);
    }

    return (
        <div><h1>Welcome!</h1>
            <p>Type your name and we are good to go!</p>
            <input
                type="text"
                onChange={handleNameChange}
                value={name}
            />
        </div>

    )
}