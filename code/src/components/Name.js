import React from 'react';

export const Name = ({ name, setName }) => {
    const handleNameChange = (event) => {
        setName(event.target.value);
}

return (
    <form onSubmit={event => event.preventDefault()}>
        <h2>"You had me at popcorn..."</h2>
        <p>What is your name?</p>
        <input 
        type="text" 
        value={name}
        onChange={handleNameChange}
        /> 
    </form>
);
};