import React from 'react'

export const Name= ({name, setName}) => {
    return (
        <div className="input-container">
            <h3>Hi! Let's get started with the survey. Firstly please enter your name</h3>
            <label>
                    <input className="text-input no-outline"
                        type="text"
                        onChange={event => setName(event.target.value)}
                        value={name}
                        placeholder="Please write your name..."
                        required
                    />             
            </label>
        </div>   
    );
};