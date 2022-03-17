import React from 'react';

const Name = ({ name, onInputChange }) => {
  return (
    <div>
      <h2>What should I call you?</h2>

      <div>
        <label htmlFor='name'>Type your name here: </label>
        <input id='name' type='text' value={name} onChange={onInputChange} />
      </div>
    </div>
  );
};

export default Name;
