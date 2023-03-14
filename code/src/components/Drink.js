/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Drink = ({ drink, setDrink }) => {
  const handleDrinkChange = (event) => {
    setDrink(event.target.value)
  }

  return (
    <>
      <label htmlFor="drink">What is your favorite drink?</label>
      <input
        id="drink"
        type="text"
        value={drink}
        onChange={handleDrinkChange}
        aria-label="drink" />
    </>
  );
}

export default Drink;