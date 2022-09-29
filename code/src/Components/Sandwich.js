import React from 'react';

export const Sandwich = ({ sandwich, setSandwich }) => {
  const handleSandwichChange = (event) => {
    setSandwich(event.target.value);
  }
  return (
    <>
      <p>What kind of sandwich do you prefer?</p>
      <select type="text" value={sandwich} onChange={handleSandwichChange}>
        <option>Choose a sandwich</option>
        <option value="Avocado toast"> Avcodaco toast </option>
        <option value="Salmon Bagel"> Bagel with salmon</option>
        <option value="Eggs Benedict"> Eggs benedict</option>
      </select>
    </>
  );
}