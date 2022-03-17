import React from "react";

const coffeeGroup = ["strong", "weak", "hot", "cold"];

const RadioBotton = ({ onCoffeeChange }) => {
  return (
    <>
      <div className="coffee-group">
        <label htmlFor="coffee">
          <h1 tabIndex="0" className="radio-heading">
            How do you like your coffee?
          </h1>
        </label>
        {coffeeGroup.map((group) => (
          <label key={group} label="coffee" className="radio-container">
            <input
              name="coffee"
              className="radio-btn"
              type="radio"
              value={group}
              onChange={onCoffeeChange}
            />
            <span tabIndex="0" class="checkmark"></span>
            {group}
          </label>
        ))}
      </div>
    </>
  );
};

export default RadioBotton;
