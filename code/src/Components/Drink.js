import React from 'react';

export const Drink = ({ drink, setDrink }) => {
  const handleDrinkChange = (event) => {
    setDrink(event.target.value);
  }
  return (
    <>
      <p>What is your favorite drink?</p>
      <input type="text" value={drink} onChange={handleDrinkChange} />
    </>
  );
}