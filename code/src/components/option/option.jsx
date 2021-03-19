import React from "react";

import { OptionContainer } from "./option.style";

const TechnologyRadioOption = ({ technologyName, setTech }) => {
  const onTechnologyChange = (e) => {
    setTech(e.target.value);
  };

  return (
    <OptionContainer>
      <input
        name="technology"
        id={technologyName}
        value={technologyName}
        type="radio"
        onChange={(e) => {
          onTechnologyChange(e);
        }} />
      <label htmlFor={technologyName}>{technologyName.toUpperCase()}</label>
    </OptionContainer>
  );
};

export default TechnologyRadioOption;
