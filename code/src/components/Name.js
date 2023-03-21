/* eslint-disable linebreak-style */
import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <>
      <span>What is your name?</span>
      <input type="text" minLength="1" value={name} onChange={handleNameChange} required />
    </>
  );
}