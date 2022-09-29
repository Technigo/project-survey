import React from 'react';

const RadioVegetarian = ({ vegetarian, setVegetarian }) => {
  const handleVegetarianChange = (event) => {
    setVegetarian(event.target.value);
  }
  return (
    <div>
      <label htmlFor="RadioButton">
        <input
          type="radio"
          value="Halloumi"
          onChange={handleVegetarianChange}
          checked={vegetarian === 'Halloumi'} /> Halloumi

        <input
          type="radio"
          value="Aubergine"
          onChange={handleVegetarianChange}
          checked={vegetarian === 'Aubergine'} /> Aubergine

        <input
          type="radio"
          value="Tofu"
          onChange={handleVegetarianChange}
          checked={vegetarian === 'Tofu'} /> Tofu

        <input
          type="radio"
          value="Tempeh"
          onChange={handleVegetarianChange}
          checked={vegetarian === 'Tempeh'} /> Tempeh

        <input
          type="radio"
          value="Beans"
          onChange={handleVegetarianChange}
          checked={vegetarian === 'Beans'} /> Beans

        <input
          type="radio"
          value="Meat substitutes"
          onChange={handleVegetarianChange}
          checked={vegetarian === 'Meat substitutes'} /> Meat substitutes
      </label>
    </div>
  );
}

export default RadioVegetarian;