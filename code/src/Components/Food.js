import React from 'react';

export const Food = ({ food, setFood }) => {
  const handleFoodChange = (event) => {
    setFood(event.target.value);
  }
  return (
    <>
      <p>What is your favorite food?</p>
      <input type="text" value={food} onChange={handleFoodChange} />
    </>
  );
}