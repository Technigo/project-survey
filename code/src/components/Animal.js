/* eslint-disable linebreak-style */
import React from 'react';

export const Animal = ({ animal, setAnimal }) => {
  const handleAnimalChange = (event) => {
    setAnimal(event.target.value);
  }
  return (
    <>
      <p>Please choose an animal.</p>
      <input type="text" minLength="1" value={animal} onChange={handleAnimalChange} required="required" />
    </>
  );
}