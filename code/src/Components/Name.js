import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h1 className="nametext">Favorite wine?</h1>
      <input
        className="name-input"
        type="text"
        value={name}
        onChange={handleNameChange} />
    </form>
  );
};