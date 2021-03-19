import React from "react";

import { OptionContainer } from "./area-option.style";

const AreaOption = ({ area, setArea }) => {
  const onAreaChange = (e) => {
    setArea(e.target.value);
  };

  return (
    <OptionContainer>
      <input
        name="technology"
        id={area}
        value={area}
        type="radio"
        onChange={(e) => {
          onAreaChange(e);
        }} />
      <label htmlFor={area}>{area.toUpperCase()}</label>
    </OptionContainer>
  );
};

export default AreaOption;
