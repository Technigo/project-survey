import React from 'react'

export const Name = ({name, setName}) => {

    return (
        <fieldset className="container">
            <legend tabIndex="0">Please enter your name</legend>
            <label for="name">
                <input
                    id="name"
                    name="name" 
                    aria-label="Enter name in box"
                    className="text-input no-outline"
                    type="text"
                    onChange={event => setName(event.target.value)}
                    value={name}
                    placeholder="Enter your name"
                    required
                />
            </label>         
        </fieldset>
    );
};