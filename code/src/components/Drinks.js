import React from "react";
import "./drinks.css";

const Drinks = ({
  drink,
  onDrinkChange,
  onStepChange,
  onPreviousQuestionChange,
}) => {
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
          <option value="coffe">Coffee</option>
          <option value="redbull">Redbull</option>
          <option value="coke">Coke</option>
          <option value="milk">Milk</option>
        </select>

        <div className="button-box">
          <button className="next-button" onClick={onPreviousQuestionChange}>
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
