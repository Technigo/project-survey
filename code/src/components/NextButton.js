import React from "react";

import "./NextButton.css";

export const NextButton = ({handleAnswer, i}) => {
  const buttonTxt = ["Let's go!", "Next", "Next", "Next", "Submit", "Redo"];

  return (
    <button
      className="next-button"
      onClick={handleAnswer}
      data-content={buttonTxt[i]}
    ></button>
  );
};
