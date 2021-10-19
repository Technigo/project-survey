import React from "react";

const investment = ["Yes", "No"];

const CryptoInvestment = ({
  onStepChange,
  cryptoInvestment,
  onCryptoInvestmentChange,
}) => {
  return (
    <div>
      <h2>Have you invested in cryptocurrencies?</h2>
      {investment.map((item) => (
        <label key={item}>
          <input
            type="radio"
            value={item}
            onChange={onCryptoInvestmentChange}
            checked={cryptoInvestment === item}
          />
          {item}
        </label>
      ))}
      <button onClick={onStepChange}>Next</button>
    </div>
  );
};

export default CryptoInvestment;
