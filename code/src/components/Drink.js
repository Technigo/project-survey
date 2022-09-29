import React from 'react';

export const Drink = ({ drink, setDrink }) => {
  return (
    <div className="question-wrapper">
      <div className="question">
        <label htmlFor="range">On a scale of 0-10 how happy are you with Earth? would you recommend it to others?{drink}</label>
        <input
          id="range"
          type="range"
          min="0"
          max="10"
          value={drink}
          onChange={(e) => setDrink(e.target.value)} />
        <div className="range-display">
          {drink}
        </div>
      </div>
    </div>
  );
}
