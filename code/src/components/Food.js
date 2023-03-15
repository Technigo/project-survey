/* eslint-disable spaced-comment */
/* eslint-disable max-len */
import React from 'react';

/* this makes the drink component accept the props food and setFood using object destructuring */
export const Food = ({ food, setFood }) => {
  const handleFoodChange = (event) => {
    setFood(event.target.value);
  }
  return (
    <>
      <p>What is your favourite food?</p>
      <input type="text" value={food} onChange={handleFoodChange} />
    </>
  );
}
/* above im giving the <input/> the value of the food from props and an onChange handler that will be handleFoodChange */