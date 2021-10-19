import React from "react";

const InvestPossibility = ({
  onStepChange,
  investPossibility,
  onInvestPossibilityChange,
}) => {
  return (
    <div>
      <div>
        <h2>
          How likely is you to invest in cryptocurrencies in the next 5 years?
        </h2>
        <input
          type="range"
          min="1"
          max="10"
          step="1"
          onChange={onInvestPossibilityChange}
          value={investPossibility}
        />
        {investPossibility}
      </div>
      <button onClick={onStepChange}>Next</button>
    </div>
  );
};

export default InvestPossibility;
