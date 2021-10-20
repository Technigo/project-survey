import React from "react";

const Restaurant = ({
  restaurantInput,
  onRestaurantInputChange,
  onStepChange,
}) => {
  return (
    <form>
      <label htmlFor="restaurantInput">
        Write the name of your favorite restaurant
      </label>
      <input
        id="restaurantInput"
        type="text"
        value={restaurantInput}
        onChange={onRestaurantInputChange}
      />
      <button onClick={onStepChange}>Submit your answers</button>
    </form>
  );
};

export default Restaurant;
