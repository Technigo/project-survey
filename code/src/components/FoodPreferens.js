/* eslint-disable linebreak-style */
import React from 'react';

export const FoodPreferens = ({ foodPreferens, setFoodPreferens }) => {
  const handleFoodPreferensChange = (event) => {
    setFoodPreferens(event.target.value);
  }

  return (
    <div className="questionsContainer">
      <form onSubmit={(event) => event.preventDefault()}>
        <h3>Has your date any food preferenses? </h3>
        <select
          className="selectionContainer"
          onChange={handleFoodPreferensChange}
          value={foodPreferens}>
          <option value=""> Select preferens</option>
          <option value="vegan"> Vegan</option>
          <option value="vegetarian"> Vegetarian</option>
          <option value="fish and seafood"> Fish and seafood</option>
          <option value="meat"> Meat</option>
          <option value="all-you-can-eat"> All you can eat</option>
        </select>
      </form>
    </div>
  );
}