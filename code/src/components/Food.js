/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Food = ({ food, setFood }) => {
  const handleFoodChange = (event) => {
    setFood(event.target.value)
  }

  return (
    <>
      <label htmlFor="food">What is your favorite food?</label>
      <input
        id="food"
        type="text"
        value={food}
        onChange={handleFoodChange}
        aria-label="Food" />
    </>
  );
}
export default Food;