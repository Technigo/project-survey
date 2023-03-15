import React from 'react';

export const Drink = ({ drink, setDrink }) => {
  const handleDrinkChange = (event) => {
    setDrink(event.target.value);
  }
  return (
    <>
      <h1 className="nametext">Typ of food?</h1>
      <input
        className="name-input"
        type="text"
        value={drink}
        onChange={handleDrinkChange} />
    </>
  );
}