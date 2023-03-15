import React from 'react';

export const Name = ({ name, setName }) =>
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    return (
        <>
        <h1>Crappy day? Lets have a party!</h1>
        <p>What's your name?</p>
        <input type="text" value={name} onChange={handleNameChange} />
        </>
    )