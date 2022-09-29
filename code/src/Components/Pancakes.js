import React from 'react';

export const Pancakes = ({ pancakes, setPancakes }) => {
  const handlePancakesChange = (event) => {
    setPancakes(event.target.value);
  }
  return (
    <>
      <p>Pick your choice of pancakes:</p>
      <div>
        <input type="radio" value="Blueberries" onChange={handlePancakesChange} checked={pancakes === 'Blueberries'} /> Blueberry please!
        <input type="radio" value="Maple Suryp" onChange={handlePancakesChange} checked={pancakes === 'Maple Suryp'} /> Maple Suryp, yummie!
        <input type="radio" value="Nutella" onChange={handlePancakesChange} checked={pancakes === 'Nutella'} /> Gotta go with Nutella!
      </div>
    </>
  );
}