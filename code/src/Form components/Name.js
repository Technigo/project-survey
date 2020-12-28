import React from 'react'

export const Name = ({name, setName}) => {

    return (
        <fieldset className="container" tabindex="0">
            <legend>Please enter your name</legend>
            <label htmlFor="name">
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