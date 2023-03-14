import React from 'react';

export const Drink = ({ drink, setDrink }) => {
  const handleDrinkChange = (event) => {
    setDrink(event.target.value);
  }
  return (
    <>
      <h1 className="nametext">What is your favorite drink?</h1>
      <input
        type="text"
        value={drink}
        onChange={handleDrinkChange} />
    </>
  );
}