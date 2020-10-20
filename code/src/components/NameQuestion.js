import React, { useState } from 'react';

export const NameQuestion = () => {
    const [name, setName] = useState()
    return (
        <form className="name-question">
            <p>What is your full name?</p>
            <input
                type="text"
                onChange={event => setName(event.target.value)}
                value={name}
                required
            />
        </form>
    );
};