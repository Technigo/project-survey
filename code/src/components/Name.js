import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    const input = event.target.value;
    const regex = /^[^0-9]*$/; // accepts only letters and spaces
    if (regex.test(input)) {
      setName(input);
      setName(event.target.value);
    }
  }
  return (
    <>
      <p>First things first...</p>
      <p>What is your name?</p>
      <input type="text" value={name} onChange={handleNameChange} />
    </>
  );
}