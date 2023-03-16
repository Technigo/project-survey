import React from 'react';

const foodOption = [
  'the biggest 🎂 you ever seen',
  'buffé with all your favourite food🍲',
  '🍐🍊🥝🍇🍉 in piles',
  '🍦 that never melts',
];

export const Food = ({ food, setFood }) => {
  const handleFoodChange = (event) => {
    setFood(event.target.value);
  }
  return (
    <>
    <div className="question">
      <p>On this amazing party you prefer to eat...</p>
      </div>
      <div className="foodBtn">
        {foodOption.map((group) => (
          <label key={group} htmlFor="group">
            <input
              type="radio"
              className="radioBtn"
              value={group}
              onChange={handleFoodChange}
              checked={food === group} />
            {group}
          </label>
        ))}
      </div>

    </>
  )
}
