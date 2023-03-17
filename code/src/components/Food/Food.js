import React from 'react';
import './food.css';
import hamburger from '../../images/hamburger.png'
import donut from '../../images/donut.png'
import pizza from '../../images/pizza.png'

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
      <p className="question-text">What is your favourite food?</p>
      <div className="image-container-food">
        <img src={pizza} alt="pizza" />
        <img src={donut} alt="donut" />
        <img src={hamburger} alt="hamburger" />
      </div>
      <input type="text" value={food} onChange={handleFoodChange} onKeyDown={handleKeyDown} className="input-field" />
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