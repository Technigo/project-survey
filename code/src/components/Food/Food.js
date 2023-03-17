import React from 'react';
import './food.css';

export const Food = ({ food, setFood, handleStepIncrease }) => {
  const handleFoodChange = (event) => {
    setFood(event.target.value);
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && food !== '') {
      handleStepIncrease();
    }
  }
  return (
    <div className="food-container">
      <p>What is your favourite food?</p>
      <input type="text" value={food} onChange={handleFoodChange} onKeyDown={handleKeyDown} />
      <div className="container-step-btn">
        <button
          className="step-btn"
          type="button"
          onClick={handleStepIncrease}
          disabled={food === ''}> Next
        </button>
      </div>
    </div>
  )
}