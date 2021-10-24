import React from "react";

const FifthQuestion = ({ pizzaInput, onPizzaInputChange, onStepChange }) => {
  return (
    <form>
      <h2>
        If it meant you could save{" "}
        <span role="img" aria-label="pizza">
          🍕
        </span>{" "}
        from extinction, would you eat a{" "}
        <span role="img" aria-label="cricket">
          🦗?
        </span>
      </h2>
      <section className="radio-container">
        <div className="radio-select">
          <label>
            <div className="radio-choice">
              <input
                type="radio"
                value="yes"
                onChange={onPizzaInputChange}
                checked={pizzaInput === "yes"}
              />
              <span role="img" aria-label="face savoring food">
                😋
              </span>
            </div>
          </label>
        </div>
        <div className="radio-select">
          <label>
            <div className="radio-choice">
              <input
                type="radio"
                value="no"
                onChange={onPizzaInputChange}
                checked={pizzaInput === "no"}
              />
              <span role="img" aria-label="nauseous face">
                🤢
              </span>
            </div>
          </label>
        </div>
      </section>
      <button disabled={pizzaInput === ""} onClick={onStepChange}>
        Next Question
      </button>
    </form>
  );
};

export default FifthQuestion;
