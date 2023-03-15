import React from 'react';

export const Food = ({ food, setFood, handleStepIncrease }) => {
  const handleFoodChange = (event) => {
    setFood(event.target.value);
  }
  return (
    <div className="food-container">
      <p>What is your favourite food?</p>
      <input type="text" value={food} onChange={handleFoodChange} />
      <div>
        <button className="step-btn" type="button" onClick={handleStepIncrease}>Next</button>
      </div>
    </div>
  )
}