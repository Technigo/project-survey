import React from 'react';
import { Button } from 'components/Button';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <>
      <label htmlFor="name">
        <p>First of all, what is your name?</p>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />
      </label>
      <Button button="Next question" />
    </>
  );
}