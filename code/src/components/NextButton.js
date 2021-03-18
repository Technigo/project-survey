import React from "react";

import "./NextButton.css";



export const NextButton = ({validation, i}) => {
  const buttonTxt = ["Let's go!", "Next", "Next", "Next", "Submit", "Redo"];

  return (
    <button
      className="next-button"
      onClick={validation}
      data-content={buttonTxt[i]}
    ></button>
  );
};
