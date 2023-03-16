import React from 'react';
import './food.css';

export const Food = ({ food, setFood }) => {
  const handleFoodChange = (event) => {
    setFood(event.target.value);
  }
  return (
    <div className="food-container">
      <p>What is your favourite food?</p>
      <input type="text" value={food} onChange={handleFoodChange} />
    </div>
  )
}