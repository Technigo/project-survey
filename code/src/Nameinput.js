import React from 'react'

export const Nameinput = (props) => {
    const { name, setName, id } = props;

    return (
        <div className="input-field">
        <label htmlFor="userName">Your name </label>
            <input
                type="text"
                onChange={event => setName(event.target.value)}
                value={name}
                required
                id={id}
                placeholder="Type your name here"
            />
        </div>
    );
};
