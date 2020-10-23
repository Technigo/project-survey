import React from 'react'

export const Nameinput = ({ name, onNameChange, id }) => {

    return (
        <div className="input-field">
        <label htmlFor="name">
        <h1 className="typewriter">What's your name?</h1>
        </label>
            <input
                id={id}
                type="text"
                onChange={event => onNameChange(event.target.value)}
                value={name}
                required
                placeholder="Type your name here"
            />
        </div>
    );
};
