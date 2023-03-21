/* eslint-disable linebreak-style */
import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <>
      <p>What is your name?</p>
      <input type="text" minLength="1" value={name} onChange={handleNameChange} required />
    </>
  );
}