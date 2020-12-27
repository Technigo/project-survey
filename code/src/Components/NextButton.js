import React from "react";

import { ButtonStyle } from "../lib/ButtonStyle";

const NextButton = ({ setSection, nextQuestion, disabled }) => {
  const handleButton = () => {
    setSection(nextQuestion);
  };
  return (
    <div>
      <ButtonStyle
        type="button"
        btntext="Nästa"
        onClick={handleButton}
        className="next-button"
        disabled={disabled}
      >
        Nästa
      </ButtonStyle>
    </div>
  );
};

export default NextButton;
