import React from 'react';

const foodOption = [
  'the biggest cake you ever seen',
  'a buffé with your favourite food',
  'fruits in piles',
  'ice cream that never melts'
];

export const Food = ({ food, setFood }) => {
  const handleFoodChange = (event) => {
    setFood(event.target.value);
  }
  return (
    <>
      <div className="question">
        <h2>What do you dream about to eat on your imaginary party?</h2>
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
