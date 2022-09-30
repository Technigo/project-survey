import React from 'react';

const RadioProtein = ({ protein, setProtein }) => {
  const handleProteinChange = (event) => {
    setProtein(event.target.value);
  }
  return (
    <div className="radio-buttons">
      <input
        type="radio"
        value="Meat"
        onChange={handleProteinChange}
        checked={protein === 'Meat'} /> Meat

      <input
        type="radio"
        value="Fish"
        onChange={handleProteinChange}
        checked={protein === 'Fish'} /> Fish

      <input
        type="radio"
        value="Vegetarian"
        onChange={handleProteinChange}
        checked={protein === 'Vegetarian'} /> Vegetarian
    </div>
  );
}

export default RadioProtein;