/* eslint-disable linebreak-style */
import React from 'react';

export const Animal = ({ animal, setAnimal }) => {
  const handleAnimalChange = (event) => {
    setAnimal(event.target.value);
  }
  return (
    <>
      <span>Pick an animal.</span>
      <input type="text" minLength="1" value={animal} onChange={handleAnimalChange} required="required" />
    </>
  );
}