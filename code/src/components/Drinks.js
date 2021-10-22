import React from "react";
import "./drinks.css";

const Drinks = ({ drink, onDrinkChange, onStepChange, onStepBackChange }) => {
  // v1
  return (
    <div className="question-container">
      <h2 className="question-title">
        As a reality superstar you need a signature drink!
      </h2>
      <form className="drinks">
        <lable className="drink-choice" for="Drinks-selection">
          Your drink of choice
        </lable>
        <select
          className="drink-selections"
          value={drink}
          onChange={onDrinkChange}
        >
          <option disabled value="">
            --Please choose an option--
          </option>
          <option value="Coffe ☕️">Coffe</option>
          <option value="Redbull ⚡️">Redbull</option>
          <option value="Coke 🥤">Coke</option>
          <option value="Milk 🥛">Milk</option>
        </select>

        <div className="button-box">
          <button className="next-button" onClick={onStepBackChange}>
             ← Go back?
          </button>
          <button className="next-button" onClick={onStepChange}>
            Next question →
          </button>
        </div>
      </form>
    </div>
  );
};

export default Drinks;
