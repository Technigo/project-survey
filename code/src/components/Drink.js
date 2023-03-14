/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Drink = ({ drink, setDrink }) => {
  const handleDrinkChange = (event) => {
    setDrink(event.target.value)
  }

  return (
    <div>
      <label htmlFor="drink">What is your favorite drink?</label>
      <div>
        <label htmlFor="coffee">
          <input
            id="coffee"
            type="radio"
            value="coffee"
            onChange={handleDrinkChange}
            checked={drink === 'coffee'}
            aria-label="coffee" />
    Coffee
        </label>
        <label htmlFor="tea">
          <input
            id="tea"
            type="radio"
            value="tea"
            onChange={handleDrinkChange}
            checked={drink === 'tea'}
            aria-label="tea" />
    Tea
        </label>
        <label htmlFor="water">
          <input
            id="water"
            type="radio"
            value="water"
            onChange={handleDrinkChange}
            checked={drink === 'water'}
            aria-label="water" />
    Water
        </label>
      </div>
    </div>
  );
}

export default Drink;