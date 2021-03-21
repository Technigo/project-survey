import React from 'react';

export const NameQuestion = ({ name, onNameChange }) => {

return (
  <div className="name-question">
    <label tabIndex="0">
      What do you think is the best name for a cat?
      <input
        className="name"
        tabIndex="0"
        type='text'
        onChange={(e) => onNameChange(e)}
        required
        value={name}
        placeholder="Cat name"
        maxLength="20"
        minLength="1"
      />
    </label>
  </div>
  );
};

