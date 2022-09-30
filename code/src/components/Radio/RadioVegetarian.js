import React from 'react';

const RadioVegetarian = ({ vegetarian, setVegetarian }) => {
  const handleVegetarianChange = (event) => {
    setVegetarian(event.target.value);
    console.log(vegetarian)
  }
  return (
    <div className="radio-buttons-vegetarian">
      <label htmlFor="RadioButton">
        <input
          type="radio"
          value="halloumi"
          onChange={handleVegetarianChange}
          checked={vegetarian === 'halloumi'} /> Halloumi

        <input
          type="radio"
          value="aubergine"
          onChange={handleVegetarianChange}
          checked={vegetarian === 'aubergine'} /> Aubergine

        <input
          type="radio"
          value="tofu"
          onChange={handleVegetarianChange}
          checked={vegetarian === 'tofu'} /> Tofu

        <input
          type="radio"
          value="tempeh"
          onChange={handleVegetarianChange}
          checked={vegetarian === 'tempeh'} /> Tempeh

        <input
          type="radio"
          value="beans"
          onChange={handleVegetarianChange}
          checked={vegetarian === 'beans'} /> Beans

        <input
          type="radio"
          value="meat substitutes"
          onChange={handleVegetarianChange}
          checked={vegetarian === 'meat substitutes'} /> Meat substitutes
      </label>
    </div>
  );
}

export default RadioVegetarian;