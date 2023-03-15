import React from 'react';

const FoodOption = [
  'The biggest 🎂 you ever seen?',
  'Buffé with all your favourite food?🍲',
  '🍐🍊🥝🍇🍉 in piles?',
  '🍦 that never melts?',
];

export const Food = ({ food, setFood }) => {
  const handleFoodChange = (event) => {
    setFood(event.target.value);
  }
  return (
    <>
    <div className="question">
      <p>What do you wanna eat on your party?</p>
      </div>
      <div className="foodBtn">
        {FoodOption.map((group) => (
          <label key={group}>
            <input type="radio" 
              value={food} 
              onChange={handleFoodChange}
              checked={food === group} />
            {group}
          </label>
        ))}
      </div>

    </>
  )
}
