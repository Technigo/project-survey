import React from "react";

const FifthQuestion = ({ pizzaInput, onPizzaInputChange, onStepChange }) => {
  return (
    <form>
      <h2>
        If it meant you could save pizza from extinction, would you eat a
        cricket?
      </h2>
      <label htmlFor="pizzaInput">Yes</label>
      <input
        type="radio"
        value="yes"
        onChange={onPizzaInputChange}
        checked={pizzaInput === "yes"}
      />

      <label htmlFor="pizzaInput">No</label>
      <input
        type="radio"
        value="no"
        onChange={onPizzaInputChange}
        checked={pizzaInput === "no"}
      />
      <button onClick={onStepChange}>Next Question</button>
    </form>
  );
};

export default FifthQuestion;
