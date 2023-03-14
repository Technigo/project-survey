import React from 'react';

export const Animal = ({ animal, setAnimal }) => {
  const handleAnimalChange = (event) => {
    setName(event.target.value);
  }
  return (
    <div>
      <p>What is your name, traveller?</p>
      <input type="text" value={name} onChange={handleNameChange} />
    </div>
  )
}