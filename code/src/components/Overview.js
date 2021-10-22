import React from "react";

const Overview = ({
  ageGroup,
  levelEducation,
  cryptoAwareness,
  cryptoInvestment,
  investPossibility,
  nameCoin,
}) => {
  if (cryptoInvestment === "Yes") {
    return (
      <div className="overview">
        <h2 className="question-header">Your overview:</h2>
        <p className="overview-answers">
          Age group: <span className="answer">{ageGroup}</span>
        </p>
        <p className="overview-answers">
          Education: <span className="answer"> {levelEducation}</span>
        </p>
        <p className="overview-answers">
          Knowledge about cryptos:
          <span className="answer">{cryptoAwareness}</span>
        </p>
        <p className="overview-answers">
          Investment on crypto:
          <span className="answer">{cryptoInvestment}</span>
        </p>
        <p className="overview-answers">
          Coin you have: <span className="answer">{nameCoin}</span>
        </p>
      </div>
    );
  } else {
    return (
      <div className="overview">
        <h2 className="question-header">Your overview:</h2>
        <p className="overview-answers">
          Age group: <span className="answer">{ageGroup}</span>
        </p>
        <p className="overview-answers">
          Education: <span className="answer">{levelEducation}</span>
        </p>
        <p className="overview-answers">
          Knowledge about cryptos:
          <span className="answer">{cryptoAwareness}</span>
        </p>
        <p className="overview-answers">
          Investment on crypto:
          <span className="answer">{cryptoInvestment}</span>
        </p>
        <p className="overview-answers">
          Likelihood of investing in cryptos:
          <span className="answer">{investPossibility}</span>
        </p>
      </div>
    );
  }
};

export default Overview;
