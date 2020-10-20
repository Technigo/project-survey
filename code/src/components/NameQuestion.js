import React, { useState } from 'react';

export const NameQuestions = () => {
    const [name, setName] = useState()
    return (
        <form>
            <p>What is your full name?</p>
            <input
                type="text"
                onchange={event => setName(event.target.value)}
                value={name}
                required
            />
        </form>
    );
};