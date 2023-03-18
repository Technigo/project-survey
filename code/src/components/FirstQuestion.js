import React from 'react';
import { Button } from 'components/button';

export const FirstQuestion = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <>
      <label htmlFor="name">
        What is your name?
        <input type="text" id="name" value={name} onChange={handleNameChange} required />
      </label>
      <Button button="Next question" />
    </>
  );
}