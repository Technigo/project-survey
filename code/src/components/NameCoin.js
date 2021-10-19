import React from "react";

const NameCoin = ({ onStepChange, onNameCoinChange, nameCoin }) => {
  return (
    <div>
      <h2>
        Please provide the name of the coin which is the largest asset in your
        portfolio
      </h2>
      <label htmlFor="coin">
        <input
          type="text"
          id="coin"
          onChange={onNameCoinChange}
          value={nameCoin}
        />
      </label>
      <button onClick={onStepChange}>Next</button>
    </div>
  );
};

export default NameCoin;
