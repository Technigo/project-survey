import React from 'react';

export const Name = ({ name, setName }) => {
    const handleNameChange = (event) => {
        setName(event.target.value);
}

return (
    <form onSubmit={event => event.preventDefault()}>
        <h2>Order your movie popcorn here</h2>
        <p>What is your name?</p>
        <input
        id="name"
        className="name-input" 
        type="text" 
        value={name}
        onChange={handleNameChange}
        aria-label="Name"
        required /> 
    </form>
);
};