import React from 'react';

export const Name = ({ name, setName }) => {
    const handleNameChange = (event) => {
        const upCaseUserName = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
        setName(upCaseUserName);
};

return (
    <form onSubmit={event => event.preventDefault()}>
        <h2>Order your movie popcorn here</h2>
        <p>What is your name?</p>
        <input
        id="name-input"
        className="name-input" 
        type="text" 
        value={name}
        placeholder="Enter name here"
        maxLength={30}
        onChange={handleNameChange}
        aria-label="Name"
        required /> 
    </form>
);
};