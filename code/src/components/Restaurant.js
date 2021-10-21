import React from "react";

const Restaurant = ({
  restaurantInput,
  onRestaurantInputChange,
  onStepChange,
  onPreviousStepChange,
}) => {
  return (
    <div className="wrapper">
      <div className="form-wrapper">
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
        </form>
      </div>
      <div className="button-wrapper">
        <button onClick={onPreviousStepChange}>Previous question</button>
        <button onClick={onStepChange}>Next question</button>
      </div>
    </div>
  );
};

export default Restaurant;
