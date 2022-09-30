import React from 'react';

const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <label htmlFor="name"><p>What is your name?</p>
      <input id="name" type="text" value={name} onChange={handleNameChange} />
    </label>
  );
}
export default Name;