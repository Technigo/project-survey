/* eslint-disable linebreak-style */
import React from 'react';

export const FoodPreferens = ({ foodPreferens, setFoodPreferens }) => {
  const handleFoodPreferensChange = (event) => {
    setFoodPreferens(event.target.value);
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h2>Has your date any food preferenses? {foodPreferens}</h2>
      <input
        type="text"
        onChange={handleFoodPreferensChange}
        value={foodPreferens} />
    </form>
  );
}