import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <>
      <p>Hi Pony!</p>
      <p>Lets create a new pony name for you</p>
      <p>What is your nickname?</p>
      <input type="text" value={name} onChange={handleNameChange} />
    </>
  );
}