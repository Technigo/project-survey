import React from 'react';

export const Food = ({ food, setFood }) => {
  const handleFoodChange = (event) => {
    setFood(event.target.value);
  }
  return (
    <>
      <h1 className="nametext">Favorite food?</h1>
      <input
        className="name-input"
        type="text"
        value={food}
        onChange={handleFoodChange} />
    </>
  );
}