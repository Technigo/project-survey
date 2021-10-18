import React, { useState } from "react";

const InvestPossibility = () => {
  const [investPossibility, setInvestPossibility] = useState();

  const onInvestPossibilityChange = (event) =>
    setInvestPossibility(event.target.value);

  return (
    <div>
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
  );
};

export default InvestPossibility;
