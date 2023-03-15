import React from 'react';

export const Name = ({ name, setName }) => {
    const handleNameChange = (event) => {
        setName(event.target.value);
}

return (
    <form>
        <h2>Welcome to the popcorn picker!</h2>
        <p>What is your name?</p>
        <input 
        type="text" 
        value={name}
        onChange={handleNameChange}
         /> 
    </form>
);
};