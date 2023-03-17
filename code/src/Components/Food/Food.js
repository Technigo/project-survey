/// ////////// IMPORTS //////////////// ///

import React from 'react';
import './Food.css';

/// ////////// FUNCTION //////////////// ///

export const Food = ({ food, setFood }) => {
  const handleDrinkChange = (event) => {
    setFood(event.target.value);
  }

  return (
    <form>
      <h2 className="nametext">WHATS COOKING?</h2>
      <input
        id="whats-cooking"
        className="name-input"
        type="text"
        value={food}
        onChange={handleDrinkChange}
        aria-label="Enter what your going to eat" />
    </form>
  );
}