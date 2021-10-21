import React from "react";

const InvestPossibility = ({
  investPossibility,
  onInvestPossibilityChange,
  onStepChange,
}) => {
  return (
    <div className="question-wrapper">
      <div>
        <div>
          <h2 className="question-header">
            How likely is you to invest in cryptocurrencies in the next 5 years?
          </h2>
          <input
            className="slider"
            type="range"
            min="1"
            max="10"
            step="1"
            onChange={onInvestPossibilityChange}
            value={investPossibility}
          />
          {investPossibility}
        </div>
      </div>
      <button className="button" onClick={onStepChange}>
        Submit
      </button>
    </div>
  );
};

export default InvestPossibility;
