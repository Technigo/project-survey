import React from "react";

const NameCoin = ({ onStepChange, onNameCoinChange, nameCoin }) => {
  return (
    <div className="question-wrapper">
      <h2 className="question-header">
        Please provide the name of the coin which is the largest asset in your
        portfolio.
      </h2>
      <label htmlFor="coin">
        <input
          minLength="3"
          maxLength="15"
          type="text"
          id="coin"
          onChange={onNameCoinChange}
          value={nameCoin}
        />
      </label>
      <button
        className="button"
        disabled={nameCoin === ""}
        onClick={onStepChange}
      >
        Submit
      </button>
    </div>
  );
};

export default NameCoin;
