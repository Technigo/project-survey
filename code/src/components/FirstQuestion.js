import React from 'react';

const FirstQuestion = ({ username, onInputChange }) => {

return (
    <div>
    <label htmlFor="name">Type our main characters name</label>
    <input 
        id="name" 
        type="text"
        value={username}
        onChange={onInputChange}
        />
        </div>
)
}

export default FirstQuestion;