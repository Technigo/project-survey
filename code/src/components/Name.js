import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <form className="nameForm">
      <p>
        What is your name?
      </p>
      <input type="text" className="nameInputField" value={name} onChange={handleNameChange} />
    </form>
  );
};
