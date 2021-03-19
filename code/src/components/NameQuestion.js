import React from 'react';

export const NameQuestion = ({ name, onNameChange }) => {
  
    return (
      
      <label>
        <div className='name-box'>    
            <h2>What is you favourite football player?</h2>
            <input
            type="text"
            maxLength="30"
            minLength="3"
            value={name}
            onChange={event => onNameChange(event.target.value)}
            placeholder="ex. Didier Drogba"
            required
            />
        </div>
      </label>
      
    );
  };