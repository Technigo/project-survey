import React from 'react';


export const NameQuestion = ({ name, onNameChange }) => {

return (

  <div className="name-question">
    <label tabIndex="0">What is best name for a cat?</label>
      <input
        type='text'
        onChange={(e) => onNameChange(e)}
        required
        value={name}
        maxLength="20"
        minLength="1"
      />
    </div>

  );
};

