import React from 'react';
import { Button } from 'components/Button';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <>
      <p>What is your name?</p>
      <label htmlFor="name">
        <input type="text" id="name" value={name} onChange={handleNameChange} required />
      </label>
      <Button button="Next question" />
    </>
  );
}