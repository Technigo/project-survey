import React from 'react';


export const NameQuestion = ({ name, onNameChange }) => {

return (

  <div>
    <label>Your cats name</label>
      <input
        type='text'
        onChange={event => onNameChange(event.target.value)}
        required
        value={name}
        maxLength="20"
        minLength="1"
      />
    </div>

  );
};

