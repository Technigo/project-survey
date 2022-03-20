import React from 'react';

const CharacterName = ({ username, onInputChange }) => {

return (
    <div>
    <label htmlFor="name"><p className="question-text">Type our main characters name:</p></label>
    <input className="choice-boxes"
        id="name" 
        type="text"
        value={username}
        onChange={onInputChange}
        />
        </div>
)
}

export default CharacterName;
