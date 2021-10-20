import React from "react";

const Drinks = ({ drink, onDrinkChange, onStepChange }) => {
  // v1
  return (
    <form className="drinks">
      <lable for="Drinks-selection">Your drink of choice</lable>
      <select
        // name="drinks"
        // id="Drinks-selection"
        value={drink}
        onChange={onDrinkChange}
      >
        <option disabled value="">
          --Please choose an option--
        </option>
        <option value="coffe">Coffee</option>
        <option value="redbull">Redbull</option>
        <option value="coke">Coke</option>
        <option value="milk">Milk</option>
      </select>
      <button onClick={onStepChange}>Next question</button>
    </form>
  );
};

export default Drinks;
