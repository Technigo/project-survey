import React, { useState } from "react";

const investment = ["Yes", "No"];

const CryptoInvestment = () => {
  const [cryptoInvestment, setCryptoInvestment] = useState();

  const onCryptoInvestmentChange = (event) =>
    setCryptoInvestment(event.target.value);

  return (
    <div>
      <p>Have you invested in cryptocurrencies?</p>
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
    </div>
  );
};

export default CryptoInvestment;
