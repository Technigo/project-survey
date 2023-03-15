import React from 'react';

export const Food = ({ food, setFood }) => {
  const handleDrinkChange = (event) => {
    setFood(event.target.value);
  }
  return (
    <>
      <h1 className="nametext">Typ of food?</h1>
      <input
        className="name-input"
        type="text"
        value={food}
        onChange={handleDrinkChange}
        required />
    </>
  );
}