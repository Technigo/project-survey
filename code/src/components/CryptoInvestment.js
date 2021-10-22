import React from "react";

const investment = ["Yes", "No"];

const CryptoInvestment = ({
  cryptoInvestment,
  onCryptoInvestmentChange,
  onStepChange,
}) => {
  return (
    <div className="question-wrapper">
      <h2 className="question-header">
        Have you invested in cryptocurrencies?
      </h2>
      {investment.map((item) => (
        <div key={item} className="label-container">
          <label htmlFor="investment" className="label">
            <input
              id="investment"
              className="input-radio"
              type="radio"
              value={item}
              onChange={onCryptoInvestmentChange}
              checked={cryptoInvestment === item}
            />
            {item}
          </label>
        </div>
      ))}
      <button
        disabled={!cryptoInvestment}
        className="button"
        onClick={onStepChange}
      >
        Next
      </button>
    </div>
  );
};

export default CryptoInvestment;
