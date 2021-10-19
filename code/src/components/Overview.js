import React from "react";

const Overview = ({
  ageGroup,
  levelEducation,
  cryptoAwareness,
  cryptoInvestment,
  investPossibility,
  nameCoin,
}) => {
  return (
    <div>
      <div>
        <h2>Your overview:</h2>
        <p>Age group: {ageGroup}</p>
        <p>Education: {levelEducation}</p>
        <p>Knowledge about cryptos: {cryptoAwareness}</p>
        <p>Investment on crypto: {cryptoInvestment}</p>
        <p>Likelihood of investing in cryptos: {investPossibility}</p>
        <p>Coin you have: {nameCoin}</p>
      </div>
    </div>
  );
};

export default Overview;
