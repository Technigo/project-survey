import React from 'react';

const RadioProtein = ({ protein, setProtein }) => {
  console.log(protein)
  return (
    <div className="radio-buttons">
      <input
        type="radio"
        value="meat"
        onChange={(event) => setProtein(event.target.value)}
        checked={protein === 'meat'} /> Meat

      <input
        type="radio"
        value="fish"
        onChange={(event) => setProtein(event.target.value)}
        checked={protein === 'fish'} /> Fish

      <input
        type="radio"
        value="vegetarian"
        onChange={(event) => setProtein(event.target.value)}
        checked={protein === 'vegetarian'} /> Vegetarian
    </div>

  );
}

export default RadioProtein;